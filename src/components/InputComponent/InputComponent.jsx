import React from "react";
import styles from "./InputComponent.module.css";

// props: label text, type of input, defaultvalue, placeholder, onChange, required, name
const InputWithLabel = (props) => {
  return (
    <label className={styles.input__label} htmlFor={props.value}>
      {props.labelText}
      <input
        className={styles.input__label__input}
        type={props.type}
        defaultValue={props?.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        name={props.name}
      />
    </label>
  );
};

export default InputWithLabel;
