import { DiReact } from "react-icons/di";
import React from "react";
import { footer } from "../../styles/Footer.module.css";

const Footer = () => {
  return (    
        <div className={footer}>
            <p><DiReact /> De <a href="https://ekisler.github.io" 
            rel="noreferrer" target="_blank">Emisael Kisler</a> Para <a href='https://www.soyhenry.com/' rel="noreferrer" target="_blank">soyHenry 
            {" "}< DiReact/></a></p>
     
    </div>
  );
};

export default Footer;
