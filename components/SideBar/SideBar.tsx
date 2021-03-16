import React from "react";
import styles from "./SideBar.module.scss";

type Props = {};

const SideBar = ({}: Props) => (
  <div className={styles.sidebar}>
    <div className={styles.sidebar__logo}>
      <img src="icons/logo.svg" alt="logo"/>
    </div>
    <div className={styles.sidebar__footer}>
      <button>
        <img src="icons/icon-sun.svg" alt="sun"/>
      </button>
      <button>
        <img className={styles.avatar} src="icons/image-avatar.jpg" alt="avatar"/>
      </button>
    </div>
  </div>
);

export default SideBar;
