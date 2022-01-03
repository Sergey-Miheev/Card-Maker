import Icon from "../../Icon/Icon";
import Text from "../../Text/Text";
import style from "./Crop.module.css"
import crop from "../../../../../../svg/crop.svg";


function Crop() {
    return (
        <div className={style.actions}>
            <button className={style.button__save}>
                <Icon iconSrc = {crop} />
                <Text text="Обрезать" />
            </button>
        </div>        
    )
}

export default Crop;