import styles from "./FontStyles.module.css";
import Style from "./Style/Button";
import SelectColor from "./Color/Select";

function FontStyles() {
    return (        
        <div className={styles.fontStyles}>
            <Style text="Ж" />
            <Style text="К" />
            <Style text="Ч" />
            <SelectColor />
        </div>    
    )
}

export default FontStyles;