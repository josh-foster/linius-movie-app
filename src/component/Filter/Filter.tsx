import React from "react";
import styles from "./Filter.module.scss";


interface Props {
  setFilter: any;
}

const Filter: React.FC<Props> = ({setFilter}) => {



  const handleChange = (e: any) => {
    setFilter(e.target.value)
  }
  return (
    <>
    <section className={styles.filter}>
      <h3>Filter by score:</h3>
        <select onChange={handleChange} name="scores" id="scores">
          <option value="All">All</option>
          <option  value="7">Over 7</option>
          <option value="middle">7 and below</option>
        </select>
    </section>
      
    </>
  );
};

export default Filter;

