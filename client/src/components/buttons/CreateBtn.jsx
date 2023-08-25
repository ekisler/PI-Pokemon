import React from "react";
import { Link } from "react-router-dom";
import { default as styles } from "../../styles/Buttons.module.css";

const CreateBtn = () => {
  return (
    <div>
      <Link to="/create">
        {" "}
        <button className={styles.btn}>Crear Pokemon</button>
      </Link>
    </div>
  );
};

export default CreateBtn;
