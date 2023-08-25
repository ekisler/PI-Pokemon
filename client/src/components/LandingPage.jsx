import { Link } from "react-router-dom";
import { default as styles } from "../styles/LandingPage.module.css";
import newPoke from "../assets/pokemon.png";
import { useEffect } from "react";

function LandingPage({ pokemon, hideFooter }) {
  useEffect(() => {
    hideFooter(false);
    return () => {
      hideFooter(true);
    };
  }, [hideFooter]);
  return (
    <div className={styles.background}>
      <Link to="/home">
        <div className={styles.btnContainer}>
          <div className={styles.homeBtn}></div>
          <span className={styles.home_span}>Entrar</span>
        </div>
      </Link>
      <div className={styles.background}>
        <img className={styles.pokemon} src={pokemon} alt="" />
        <img className={styles.newPoke} src={newPoke} alt="" />
      </div>
    </div>
  );
}

export default LandingPage;
