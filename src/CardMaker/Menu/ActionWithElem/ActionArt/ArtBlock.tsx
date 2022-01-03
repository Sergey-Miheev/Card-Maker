import styles from "./ArtBlock.module.css";
import Subtitle from "./Description/Subtitle";

function ArtBlock() {
    return (        
        <div className={styles.artBlock}>
            <select>
                <option>Art1</option>
                <option>Art2</option>
            </select>
            <select >
                <option>100</option>
                <option>200</option>
                <option>300</option>
            </select>
            <Subtitle text="Объект" />
        </div>    
    )
}

export default ArtBlock;