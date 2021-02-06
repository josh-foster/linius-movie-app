import React from "react";
import styles from "./Navigation.module.scss";


const Navigation: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h1>LMDb</h1>
      </nav>
    </>
  );
};

export default Navigation;

