import React from 'react'
import Layout from '../components/Layout/Layout';
import InvoiceList from './InvoiceList/InvoiceList.tsx';
import FormPanel from '../components/FormPanel/FormPanel'; 

export default function Home() {


  const openNav = () => {
    const formPanel = window.document.getElementById("formPanel");
    const main = window.document.getElementById("main");
    console.log('formPanel ', formPanel)
    if (typeof window === 'undefined') {
      return;
    }
    console.log('open nav')
    if (formPanel) {
      formPanel.style.width = "500px";
    }
    if (main) {
      main.style.marginLeft = "500px";
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
