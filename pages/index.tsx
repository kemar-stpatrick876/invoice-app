import React from "react";
import Layout from "../components/Layout/Layout";
import InvoiceList from "./InvoiceList/InvoiceList.tsx";
import FormPanel from "../components/FormPanel/FormPanel";
import { ThemeContext, themes } from "../components/ThemeContext/theme-context";
import { mutate } from 'swr'

interface IState {
  theme: themes;
  toggleTheme: () => void;
  invoiceKeyList: number;

}
class Home extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.closeFormPanel = this.closeFormPanel.bind(this);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      invoiceKeyList: 7
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
    this.setState({invoiceKeyList: this.state.invoiceKeyList * 87})
  }
  toggleTheme() {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
    mutate("/api/invoices");
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Layout>
          <FormPanel closeFormPanel={this.closeFormPanel}></FormPanel>
          <InvoiceList openFormPanel={this.openFormPanel} key={this.state.invoiceKeyList}></InvoiceList>
        </Layout>
      </ThemeContext.Provider>
    );
  }
}

export default Home;
