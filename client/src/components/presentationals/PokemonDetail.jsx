import React from "react";
import styles from "../../styles/PokemonDetail.module.css";
import stylePokemon from "../../styles/Pokemon.module.css";
import Footer from "../presentationals/Footer";

const PokemonDetail = ({ pokemonDetail }) => {
  const {
    name,
    id,
    types,
    urlImg,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    createInDb,
  } = pokemonDetail;
  return (
    <div className={styles.detailContainer}>
      <div className={styles.dataContainer}>
        <div className={styles.description}>
          <p className={styles.p_id}>Nro. {createInDb ? id.slice(0, 5) : id}</p>
          <h2>{name}</h2>
          <div className={stylePokemon.typesContainer}>
            {types?.map((type, i) => (
              <p className={stylePokemon[type.toLowerCase()]} key={i}>
                {type}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.statsChart}>
          <div className={styles.singleBar}>
            <div className={styles.bar}>
              <div className={styles.value} style={{ height: `${hp / 2}%` }}>
                {/* Obtengo el height %. La barra en total mide 200px */}
                <span style={{ color: "white", display: "inline" }}>{hp}</span>
              </div>
            </div>
            <div className={styles.title}>Vida(HP)</div>
          </div>

          <div className={styles.singleBar}>
            <div className={styles.bar}>
              <div
                className={styles.value}
                style={{ height: `${attack / 2}%` }}
              >
                {/* Obtengo el height %. La barra en total mide 200px */}
                <span style={{ color: "white", display: "inline" }}>
                  {attack}
                </span>
              </div>
            </div>
            <div className={styles.title}>Ataque</div>
          </div>

          <div className={styles.singleBar}>
            <div className={styles.bar}>
              <div
                className={styles.value}
                style={{ height: `${defense / 2}%` }}
              >
                {/* Obtengo el height %. La barra en total mide 200px */}
                <span style={{ color: "white", display: "inline" }}>
                  {defense}
                </span>
              </div>
            </div>
            <div className={styles.title}>Defensa</div>
          </div>

          <div className={styles.singleBar}>
            <div className={styles.bar}>
              <div className={styles.value} style={{ height: `${speed / 2}%` }}>
                {/* Obtengo el height %. La barra en total mide 200px */}
                <span style={{ color: "white", display: "inline" }}>
                  {speed}
                </span>
              </div>
            </div>
            <div className={styles.title}>Velocidad</div>
          </div>
        </div>

        <div className={styles.physical}>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
        </div>
      </div>
      <img src={urlImg} alt="Pokemon" />  
      <Footer />
      
    </div>

    

  );
  
  
  
};

export default PokemonDetail;
