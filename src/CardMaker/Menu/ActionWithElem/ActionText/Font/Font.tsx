import styles from "./Font.module.css";
import Create from "./Button/Button";
import SelectFont from "./SelectFont/Button";
import SelectSize from "./SelectSize/Button";

function Font() {
    return (        
        <div className={styles.font}>
            <Create text="Создать" />
            <SelectFont />
            <SelectSize />
        </div>    
    )
}

export default Font;