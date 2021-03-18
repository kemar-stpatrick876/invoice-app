import React from "react";
import FormPanel from "../components/FormPanel/FormPanel";
import { mutate } from "swr";
import InvoiceList from "./InvoiceList/InvoiceList";

interface IState {
  invoiceKeyList: number;
}
class Home extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.closeFormPanel = this.closeFormPanel.bind(this);
    this.state = {
      invoiceKeyList: 7,
    };
  }

  openFormPanel() {
    const formPanel = window.document.getElementById("formPanel");
    const main = window.document.getElementById("main");
    const panelWidth = "720px";
    if (typeof window === "undefined") {
      return;
    }
    if (formPanel) {
      formPanel.style.width = panelWidth;
    }
    if (main) {
      main.style.marginLeft = panelWidth;
    }
  }

  closeFormPanel() {
    const formPanel = window.document.getElementById("formPanel");
    const main = window.document.getElementById("main");
    if (formPanel) {
      formPanel.style.width = "0";
    }
    if (main) {
      main.style.marginLeft = "0";
    }
    this.setState({ invoiceKeyList: this.state.invoiceKeyList * 87 });
    mutate("/api/invoices");
  }
 

  render() {
    return (
      <div>
        <FormPanel closeFormPanel={this.closeFormPanel}></FormPanel>
        <InvoiceList
          openFormPanel={this.openFormPanel}
          key={this.state.invoiceKeyList}
        ></InvoiceList>
      </div>
    );
  }
}

export default Home;
