import React from "react";
import { default as styles } from "../../styles/Select.module.css";

const Filters = ({ items, defaultDescription, handleFilter }) => {
  return (
    <div className={styles.select}>
      <select
        name={{ defaultDescription }}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="default">{defaultDescription}</option>
        {items?.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filters;
