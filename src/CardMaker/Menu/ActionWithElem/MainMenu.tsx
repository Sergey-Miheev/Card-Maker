import styles from "./MainMenu.module.css";
import TextBlock from "./ActionText/TextBlock";
import ArtBlock from "./ActionArt/ArtBlock";
import ImgBlock from "./ActionImg/ImgBlock";
import AreaBLock from "./ActionArea/AreaBlock";
import FilterBlock from "./Filter/Filter";
import Separator from "./Separator/Line";
import CardBlock from "./ActionCard/Card";

function MainMenu() {
  return (
    <div className={styles.menu__main}>
      <TextBlock />
      <Separator />
      <ArtBlock />
      <Separator />
      <ImgBlock />
      <Separator />
      <AreaBLock />
      <Separator />
      <FilterBlock />
      <Separator />
      <CardBlock />
    </div>
  )
}

export default MainMenu;