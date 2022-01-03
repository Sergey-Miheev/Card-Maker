import styles from "./Filter.module.css";
import SelectTransparency from "./SelectSize/Button";
import SelectColor from "./Color/Select";
import Subtitle from "./Description/Subtitle";

function FilterBlock() {
  return (
    <div className={styles.filter}>
      <SelectTransparency />
      <SelectColor />
      <Subtitle text="Фильтр" />
    </div>
  )
}

export default FilterBlock;