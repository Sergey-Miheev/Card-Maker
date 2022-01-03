import styles from "./Button.module.css";
import Icon from "./Icon/Icon";
import Text from "./Text/Text";
import img from "../../../../../svg/image.svg"; 

function SelectBack() {
    return (
        <button className={styles.button__save}>
            <Icon iconSrc = {img} />
            <Text text="Фото" />
        </button>
    )
}

export default SelectBack;