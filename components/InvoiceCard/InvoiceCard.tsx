import React from "react";
import styles from "./InvoiceCard.module.scss";
import { Invoice } from "../../pages/invoice.model";
import Image from "next/image";
import Link from "next/link";

interface Props {
  invoice: Invoice;
}

export const InvoiceCard = ({ invoice }: Props) => {
  return (
    <div className={styles.invoiceCard}>
      <span className={styles.invoiceCard__id}>#{invoice?.id}</span>
      <span className={styles.invoiceCard__paymentDue}>
        {" "}
        <span>Due </span>
        {invoice?.paymentDue}
      </span>
      <span className={styles.invoiceCard__clientName}>
        {invoice?.clientName}
      </span>
      <span className={styles.invoiceCard__total}>${invoice?.total}</span>
      <span
        className={`${styles.invoiceCard__status} ${styles[invoice?.status]}`}
      >
        <span className={styles.badge}></span>
        {invoice?.status}
      </span>
      <Link
        href={{
          pathname: "/invoice/[id]",
          query: { id: invoice?.id },
        }}
      >
        <img src="/icons/icon-arrow-right.svg" alt="right arrow" />
      </Link>
    </div>
  );
};
