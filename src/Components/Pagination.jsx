import React from "react";
import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  return (
    <ReactPaginate
      pageCount={info.pages}
      className={styles.pagination}
      pageClassName={styles.liStyle}
      activeClassName={styles.activeLi}
      previousClassName={styles.prevNext}
      nextClassName={styles.prevNext}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
