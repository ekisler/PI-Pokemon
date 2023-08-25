import React from "react";
import { Link } from "react-router-dom";
import { default as styles } from "../../styles/Buttons.module.css";

const BackBtn = () => {
  return (
    <div>
      <Link to="/home">
        {" "}
        <button className={styles.btn}> Atras</button>
      </Link>
    </div>
  );
};

export default BackBtn;
