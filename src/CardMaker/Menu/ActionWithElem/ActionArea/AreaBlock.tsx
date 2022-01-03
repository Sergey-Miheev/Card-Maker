import style from "./AreaBlock.module.css";
import Subtitle from "./Description/Subtitle";
import Actions from "./Actions/Actions";

function AreaBLock() {
    return (
        <div className={style.area}>
            <Actions />
            <Subtitle text="Область" />
        </div>        
    )
}

export default AreaBLock;