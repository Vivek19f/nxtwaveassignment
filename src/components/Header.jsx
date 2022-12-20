import logo from "../assets/logo.svg";
import profile from "../assets/image.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left__section}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.right__section}>
          <button className={styles.button}>Add Items</button>
          <img
            src={profile}
            alt="Profile Icon"
            className={styles.profile__icon}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
