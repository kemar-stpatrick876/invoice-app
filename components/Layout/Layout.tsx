import React, { ReactNode } from "react";
import Head from "next/head";
import SideBar from "../SideBar/SideBar";
import scss from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>Invoice App</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={scss.container}>
      <SideBar></SideBar>
      <div className="main">{children}</div>
    </div>
  </div>
);

export default Layout;
