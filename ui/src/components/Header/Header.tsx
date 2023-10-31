import React, { FC } from "react";
import styles from "./Header.module.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <h4 className={styles.WebsiteName}>✨Bewitching Magic✨</h4>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
  </div>
);

export default Header;
