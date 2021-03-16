import React, { ReactNode } from "react";
import Head from "next/head";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.scss";
import { ThemeContext } from "../ThemeContext/theme-context";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div>
        <Head>
          <title>Invoice App</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className={`${styles.container} ${styles['container--'+theme]}`}>
          <SideBar />
          <div id="main" className={`${styles.main} ${styles['main--'+theme]}`}>
            {children}
          </div>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Layout;
