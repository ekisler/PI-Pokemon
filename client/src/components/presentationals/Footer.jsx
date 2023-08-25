import { DiReact } from "react-icons/di";
import React from "react";
import { default as styles } from "../../styles/Footer.module.css";

const Footer = () => {
  return (    
        <div className={styles.footer}>
            <p><DiReact /> De <a href="https://emisaelportfolio.netlify.app" 
            rel="noreferrer" target="_blank">Emisael Kisler</a> Para <a href='https://www.soyhenry.com/' rel="noreferrer" target="_blank">soyHenry 
            {" "}< DiReact/></a></p>
     
    </div>
  );
};

export default Footer;
