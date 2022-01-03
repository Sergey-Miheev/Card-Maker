import styles from "./ImgBlock.module.css";
import Icon from "./Icon/Icon";
import Icon2 from "./Icon/Icon2";
import Text from "./Text/Text";
import net from "../../../../svg/net.svg"; 
import locale from "../../../../svg/folder.svg";
import Subtitle from "./Description/Subtitle";

function ImgBlock() {
    return (
        <div className={styles.menu__img} >
            <button className={styles.button}>
                <Icon iconSrc = {net} />
                <Text text="Загрузить изображение c Pixels" />
            </button>
            <button className={styles.button} >
                <Icon2 iconSrc = {locale} />
                <Text text="Загрузить локальное изображение" />
            </button>
            <Subtitle text="Изображение" />
        </div>    
    )
}

export default ImgBlock;