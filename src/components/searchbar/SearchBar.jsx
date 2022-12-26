import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

// take onChange method as props

function SearchBar({ handleOnChange }) {
  return (
    <div className={styles.search__bar}>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default SearchBar;
