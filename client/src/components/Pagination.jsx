//Componente que renderiza los botones, y les asocia un evento para modificar el estado local de pokemonContainer
import { default as styles } from "../styles/Buttons.module.css";

function Pagination({ items, quantityXPage, handlePagination, currentPage }) {
  //handlePagination, función que setea la currentPage de mi container

  //Bluce for me genera cantidad de botones que necesito
  const pages = Math.ceil(items.length / quantityXPage);
  let pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.wrapperPagination}>
      {pageNumbers.length !== 0 && (
        <ul className={styles.pagination}>
          <li className={styles.pagination__item}>
            <button
              className={styles.prevNextPageBtn}
              onClick={() => {
                if (currentPage > 1) return handlePagination(currentPage - 1);
              }}
            >
              {"<< "}
            </button>
          </li>
          {pageNumbers?.map((pageNumber) => {
            return (
              <li className={styles.pagination__item} key={pageNumber}>
                <button
                  className={`${styles.pagination__link} ${
                    pageNumber === currentPage ? styles.is_active : ""
                  }`}
                  onClick={() => {
                    return handlePagination(pageNumber);
                  }}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          <li className={styles.pagination__item}>
            <button
              className={styles.prevNextPageBtn}
              onClick={() => {
                if (currentPage < pageNumbers.length)
                  return handlePagination(currentPage + 1);
              }}
            >
              {">>"}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Pagination;

export const objIndexPagination = (pageNumber, quantityXPage) => {
  const lastItemIndex = pageNumber * quantityXPage;
  const firstItemIndex = lastItemIndex - quantityXPage;
  return { lastItemIndex, firstItemIndex };
};
