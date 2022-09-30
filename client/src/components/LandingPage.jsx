import { Link } from "react-router-dom";
import { background, homeBtn, home_span, pokemon } from "../styles/LandingPage.module.css";


function LandingPage() {
  return (
   
    <div className={background}>
      <Link to="/home">
        <div className={homeBtn}></div>
        <span className={home_span}>Entrar</span>
      </Link>
    <div className={background}>
        <img className={pokemon} src={pokemon} alt=""/>
    </div>
    </div>
 
  );
  
   
     
    
  
}

export default LandingPage;
