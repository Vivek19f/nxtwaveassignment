import React from "react";
import styles from "./SelectComponent.module.css";

const SelectComponent = (props) => {
  return (
    <label className={styles.select__label}>
      {props.labelText}
      <select
        className={styles.select__input}
        defaultValues={props?.value}
        onChange={props.onChange}
        name={props.name}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectComponent;
