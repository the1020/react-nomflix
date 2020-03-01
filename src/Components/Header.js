import React from "react";
import Styles from "./Header.module.css";

export default () => (
  <header>
    <ul className={Styles.navList}>
      <li>
        <a href="/">Movie</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
