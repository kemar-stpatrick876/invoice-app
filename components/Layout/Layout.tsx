import React, { ReactNode, Component } from "react";
import Head from "next/head";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.scss";
import { ThemeContext, themes } from "../ThemeContext/theme-context";

type Props = {
  children?: ReactNode;
  title?: string;
};

interface State {
  theme: themes;
  toggleTheme: () => void;
}

export default class Layout extends Component<Props, State> {
  state = {
    theme: themes.light,
    toggleTheme: () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    },
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <div>
        <Head>
          <title>Invoice App</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ThemeContext.Provider value={this.state}>
          <div
            className={`${styles.container} ${styles["container--" + theme]}`}
          >
            <SideBar />
            <div
              id="main"
              className={`${styles.main} ${styles["main--" + theme]}`}
            >
              {children}
            </div>
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}
