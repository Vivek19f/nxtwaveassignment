import React from "react";

import styles from "./Pagination.module.css";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const handleClick = (page) => {
    if (page < totalPages) onPageChange(page); // Call the onPageChange callback with the new page
  };

  return (
    <div
      className="pagination"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <button
        className={styles.pagination__button}
        onClick={() => handleClick(currentPage - 1)}
      >
        {"<"}
      </button>

      <button
        className={styles.pagination__button}
        onClick={() => handleClick(currentPage + 1)}
      >
        {" >"}
      </button>
    </div>
  );
}

export default Pagination;
