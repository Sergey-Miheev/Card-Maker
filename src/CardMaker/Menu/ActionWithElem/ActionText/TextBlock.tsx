import styles from "./TextBlock.module.css";
import Font from "./Font/Font";
import FontStyles from "./FontStyles/FontStyles";
import Subtitle from "./Description/Subtitle";

function TextBlock() {
  return (
    <div className={styles.main__text}>
      <Font />
      <FontStyles />
      <Subtitle text="Текст" />
    </div>
  )
}

export default TextBlock;