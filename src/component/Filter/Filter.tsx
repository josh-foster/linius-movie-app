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
      <h3>Sort by rating:</h3>
        <select onChange={handleChange} name="scores" id="scores">
          <option value="unsorted">Unsorted</option>
          <option  value="sorted">Sorted</option>
        </select>
    </section>
      
    </>
  );
};

export default Filter;

