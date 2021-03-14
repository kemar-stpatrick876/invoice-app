import React from "react";
import scss from "./SideBar.module.scss";

type Props = {};

const SideBar = ({}: Props) => (
  <div className={scss.sidebar}>
    <div className={scss.sidebar__logo}>
      <img src="icons/logo.svg" alt="logo"/>
    </div>
    <div className={scss.sidebar__footer}>
      <button>
        <img src="icons/icon-sun.svg" alt="sun"/>
      </button>
      <button>
        <img className={scss.avatar} src="icons/image-avatar.jpg" alt="avatar"/>
      </button>
    </div>
  </div>
);

export default SideBar;
