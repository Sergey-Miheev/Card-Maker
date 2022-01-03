import Icon from "../../Icon/Icon";
import Text from "../../Text/Text";
import style from "./Selected.module.css"
import select from "../../../../../../svg/select.svg"; 

function Selected() {
    return (
        <div className={style.actions}>
            <button className={style.button__save}>
                <Icon iconSrc = {select} />
                <Text text="Выделить" />
            </button>
        </div>        
    )
}

export default Selected;