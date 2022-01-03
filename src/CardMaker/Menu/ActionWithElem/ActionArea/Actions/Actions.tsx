import style from "./Actions.module.css";
import Selected from "./Selected/Selected";
import Crop from "./Crop/Crop";
import Clear from "./Clear/Clear";

function Actions() {
    return (
        <div className={style.actions}>
            <Selected />
            <Crop />
            <Clear />
        </div>        
    )
}

export default Actions;