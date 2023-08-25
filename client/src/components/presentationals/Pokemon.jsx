import { Link } from "react-router-dom";
import style, { default as styles} from "../../styles/Pokemon.module.css";
import { default as styles1} from "../../styles/Buttons.module.css"

function Pokemon(props) {
  const { name, types, urlImg, id, createInDb } = props.pokemons;
  const handleDelete  = props.handleDelete;

  return (
    <div className={styles.card}>
      {createInDb && <button className={styles1.deleteBtn} onClick={() => handleDelete(id)}>X</button>}
      <div className={styles.cover}>
        <img src={urlImg} alt="Pokemons" />
        <div className={styles.img__back}></div>
      </div>
      <div className={styles.description}>
        <h2>{name} </h2>
        {createInDb ? (
          <div className={styles.idPokemon}>Nro.{id.slice(0, 5)}</div>
        ) : (
          <div className={styles.idPokemon}>Nro.{id}</div>
        )}
        <div className={styles.typesContainer}>
          {types?.map((type, i) => (
            <p className={style[type.toLowerCase()]} key={i}>
              {type}
            </p>
          ))}
        </div>
        <Link to={`/detail/${id}`}>
          <button>Más Detaile</button>
        </Link>
      </div>
    </div>
  );
}

export default Pokemon;
