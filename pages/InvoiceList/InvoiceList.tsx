import React from "react";
import styles from "./invoice-list.module.scss";
import Button, { btnVariant } from "../../components/Button/Button";
import useSwr from "swr";
type InvoiceListProps = {
  openNav: Function;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function InvoiceList({openNav}: InvoiceListProps) {
  const { data, error } = useSwr("/api/invoices", fetcher);
  if (!data) return <div>Loading...</div>;
  const noInvoice = (
    <div className={styles.noInvoice}>
      <img src="icons/illustration-empty.svg" alt="" />
      <div>
        <h2>There is nothing here</h2>
        <span className="body1">
          Create an invoice by clicking the <br /> New Invoice button and get
          started
        </span>
      </div>
    </div>
  );

  return (
    <div className={styles.invoiceList}>
      <div className={styles.invoiceList__header}>
        <div className={styles.invoiceList__header__left}>
          <h1>Invoices</h1>
          <span className="body1">No invoices</span>
        </div>
        <div className={styles.invoiceList__header__right}>
          <h4 className=""> Filter By Status</h4>
          <Button label="New Invoice" variant={btnVariant.btn_v1} onClick={openNav}></Button>
        </div>
      </div>
      {data.length === 0 ? noInvoice: ''}
    </div>
  );
}
