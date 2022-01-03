import styles from "./Menu.module.css";
import TopButtons from "./ActionWithCard/TopButtons";
import MainMenu from "./ActionWithElem/MainMenu";

function Menu() {
  return (
    <div className={styles.menu}>
      <TopButtons />
      <MainMenu />
    </div>
  )
}

export default Menu;
