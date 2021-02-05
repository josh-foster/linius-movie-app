import React from "react";
import styles from "./navigation.module.css";
import Filter from '../Filter'

interface Props {
  setFilter: any;
}

const Navigation: React.FC<Props> = ({ setFilter}) => {
  return (
    <>
      <nav className={styles.nav}>
        <h1>Linius Movies</h1>
        
          <Filter 
          setFilter={setFilter}
          />
       
      </nav>
    </>
  );
};

export default Navigation;

