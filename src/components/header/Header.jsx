import logo from "../../assets/logo.svg";
import profile from "../../assets/image.svg";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

// takes a prop isButton to show add items button
function Header(props) {
  const history = useNavigate();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left__section}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.right__section}>
          {props.isButton ? (
            <button
              onClick={() => history("/nxtwaveassignment/add-items")}
              className={styles.button}
            >
              Add Items
            </button>
          ) : null}
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
