import styles from "./TopButtons.module.css";
import Arrow from "./Arrow/Button";
import SaveButton from "./SaveButton/Button";
import SelectPattern from "./Patterns/Patterns";
import undo from "../../../svg/undo.svg"; 
import redo from "../../../svg/redo.svg"; 

function TopButtons() {
    return (
        <div className={styles.menu__top}>
            <SaveButton />
            <Arrow iconSrc={undo} />
            <Arrow iconSrc={redo} />
            <SelectPattern />
        </div>
    )
}

export default TopButtons;