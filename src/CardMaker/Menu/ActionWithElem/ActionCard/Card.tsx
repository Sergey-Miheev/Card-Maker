import styles from "./Card.module.css";
import SelectBack from "./SelectBack/Button";
import SelectColor from "./SelectColor/Select";
import Subtitle from "./Description/Subtitle";

function CardBlock() {
  return (
    <div className={styles.card}>
      <SelectBack />
      <SelectColor />
      <Subtitle text="Фон" />
    </div>
  )
}

export default CardBlock;