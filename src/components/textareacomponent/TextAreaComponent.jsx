import React from "react";
import styles from "./TextArea.module.css";

const TextAreaComponent = (props) => {
  return (
    <label className={styles.textarea__label}>
      {props.labelText}:
      <textarea
        className={styles.textarea_input}
        defaultValue={props?.value}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        rows={props.rows}
        cols={props.cols}
        required={props.required}
      />
    </label>
  );
};

export default TextAreaComponent;
