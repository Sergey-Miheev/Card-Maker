import Icon from "../../Icon/Icon";
import Text from "../../Text/Text";
import style from "./Clear.module.css"
import clear from "../../../../../../svg/delete.svg";


function Select() {
    return (
        <div className={style.actions}>
            <button className={style.button__save}>
                <Icon iconSrc = {clear} />
                <Text text="Выделить" />
            </button>
        </div>        
    )
}

export default Select;