import React, { FC } from "react";
import styles from "./Header.module.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <a href="/"><h4 className={styles.WebsiteName}>✨Bewitching Magic✨</h4>
    <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
    </a>
  </div>
);

export default Header;
