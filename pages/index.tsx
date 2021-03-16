import React from 'react'
import Layout from '../components/Layout/Layout';
import InvoiceList from './InvoiceList/InvoiceList.tsx';
import FormPanel from '../components/FormPanel/FormPanel'; 

export default function Home() {


  const openNav = () => {
    const formPanel = window.document.getElementById("formPanel");
    const main = window.document.getElementById("main");
    const panelWidth = "720px";
    if (typeof window === 'undefined') {
      return;
    }
    if (formPanel) {
      formPanel.style.width = panelWidth;
    }
    if (main) {
      main.style.marginLeft = panelWidth;
    }
  }
  
  function closeNav() {
    const formPanel = window.document.getElementById("formPanel");
    const main = window.document.getElementById("main");
    if (formPanel) {
      formPanel.style.width = "0";
    }
    if (main) {
      main.style.marginLeft = "0";
    }
  }
  return (
    <Layout>
      <FormPanel></FormPanel>
      <InvoiceList openNav={openNav}></InvoiceList>
    </Layout>
  )
}
