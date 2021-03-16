import React from "react";
import Layout from "../components/Layout/Layout";
import InvoiceList from "./InvoiceList/InvoiceList.tsx";
import FormPanel from "../components/FormPanel/FormPanel";
import { ThemeContext, themes } from "../components/ThemeContext/theme-context";

interface IState {
  theme: themes;
  toggleTheme: () => void;
}
class Home extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  openNav() {
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

  closeNav() {
    const formPanel = window.document.getElementById("formPanel");
    const main = window.document.getElementById("main");
    if (formPanel) {
      formPanel.style.width = "0";
    }
    if (main) {
      main.style.marginLeft = "0";
    }
  }
  toggleTheme() {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Layout>
          <FormPanel></FormPanel>
          <InvoiceList openNav={this.openNav}></InvoiceList>
        </Layout>
      </ThemeContext.Provider>
    );
  }
}

export default Home;
