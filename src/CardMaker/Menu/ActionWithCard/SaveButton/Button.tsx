import styles from "./Button.module.css";
import Icon from "./Icon/Icon";
import Text from "./Text/Text";
import saveIcon from "../../../../svg/save.svg"; 

function SaveButton() {
    return (
        <button className={styles.button__save}>
            <Icon iconSrc = {saveIcon} />
            <Text text="Сохранить" />
        </button>
    )
}

export default SaveButton;