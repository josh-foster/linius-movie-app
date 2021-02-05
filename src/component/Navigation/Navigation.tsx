import React from "react";
import styles from "./Navigation.module.scss";
import Filter from '../Filter'

interface Props {
  setFilter: any;
}

const Navigation: React.FC<Props> = ({ setFilter}) => {
  return (
    <>
      <nav className={styles.nav}>
        <h1>LMDb</h1>
      </nav>
    </>
  );
};

export default Navigation;

