import React from "react";
import styles from "./Filter.module.scss";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<Props> = ({setFilter}) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  }

  return (
    <>
      <section className={styles.filter}>
        <h3>Sort by rating:</h3>
          <select onChange={handleChange} name="scores" id="scores">
            <option value="unsorted">Unsorted</option>
            <option  value="sorted">Highest First</option>
          </select>
      </section> 
    </>
  );
};

export default Filter;

