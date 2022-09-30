//Componente que renderizara todos los botones de filtrado y busqueda
import SearchBtn from "../buttons/SearchBtn";
import Sort from "../buttons/Sort";
import { useSelector } from "react-redux";
import Filters from "../buttons/Filters";
import CreateBtn from "../buttons/CreateBtn";
import styles from "../../styles/NavHome.module.css";
import Swal from "sweetalert2";
function NavHome({
  handleSortAlph,
  handleSortStrength,
  handleTypeFilter,
  handleSourceFilter,
}) {
  const types = useSelector((state) => state.types);

  const sourceOptions = [
    { name: "api", id: 1 },
    { name: "created", id: 2 },
  ];

  return (
    <>
      <ul className={styles.navhome_ul}>
        <li>
          <SearchBtn />
        </li>
        <li>
          <Sort
            handleSort={handleSortAlph}
            sortDescription="Orden alfabetico"
          />
        </li>
        <li>
          <Sort
            handleSort={handleSortStrength}
            sortDescription="Orden por fuerza"
          />
        </li>
        <li>
          <Filters
            items={types}
            defaultDescription="Filtro por Tipo"
            handleFilter={handleTypeFilter}
          />
        </li>
        <li>
          <Filters
            items={sourceOptions}
            defaultDescription="Filtro por fuente"
            handleFilter={handleSourceFilter}
          />
        </li>
        <li>
          <CreateBtn />
        </li>
        <li>
          <button
            className={styles.aboutBtn}
            onClick={() =>
              Swal.fire({
                title: "<strong>Pokemon app</strong>",
                icon: "info",
                html:
                  "<b>Herramientas usadas:</b><br><br> { <b>FrontEnd</b>: ['React', 'Redux', 'HTML', 'CSS', 'JavaScript'],<br>" +
                  "<b>BackEnd</b>: ['Node Js', 'Express', 'Axios'],<br>" +
                  "<b>DATABASE</b>: ['Sql', 'Postgres', 'Sequelize'] }",
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Gracias a soyHenry!',
                confirmButtonAriaLabel: "Thumbs up, great!",
              })
            }
          >
            <i className={`fa fa-question ${styles.question}`}></i>{" "}
          </button>
        </li>
      </ul>
    </>
  );
}

export default NavHome;


