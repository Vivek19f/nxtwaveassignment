import styles from "./Card.module.css";

function Card({ data }) {
  return (
    <div className={styles.block}>
      <div className={styles.block__header}>
        <img src={data.icon_url} alt="" className={styles.block__img} />
        <div className={styles.block__header__content}>
          <span>{data.title}</span>
          <span>{data.category}</span>
        </div>
      </div>
      <div className={styles.block__content}>
        <a target={"_blank"} href={data.link} rel="noreferrer">
          {" "}
          {data.link}
        </a>
        <span className={styles.block__content__description}>
          {data.description}
        </span>
      </div>
    </div>
  );
}

export default Card;
