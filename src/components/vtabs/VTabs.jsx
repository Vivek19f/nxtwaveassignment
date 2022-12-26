import React, { useState } from "react";
import styles from "./Vtabs.module.css";

function VTabs(props) {
  const [selected, setSelected] = useState(0);
  function handleChange(index) {
    setSelected(index);
  }

  return (
    <>
      <div className={styles.tab__container}>
        <ul className={styles.tab__header}>
          {props?.children.map((elem, index) => {
            let style = index === selected ? styles.selected : "";
            return (
              <li
                key={index}
                className={style}
                onClick={() => handleChange(index)}
              >
                {elem.props.title}
              </li>
            );
          })}
        </ul>
        <div className="tab">{props.children[selected]}</div>
      </div>
    </>
  );
}

export default VTabs;
