import React from "react";
import { default as styles } from "../../styles/Select.module.css";


const Sort = ({ handleSort, sortDescription}) => {

  return (
    <div className={styles.select}>
      <select
        name="sortOption"
        onChange={(e) => {
          handleSort(e.target.value);
        }}
      >
        <option value="default">{sortDescription}</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
};

export default Sort;
