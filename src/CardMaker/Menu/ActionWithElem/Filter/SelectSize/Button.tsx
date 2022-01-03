import styles from "./Button.module.css";

function SelectTransparency() {
    return (        
        <select className="text__names button">
          <option>0.1</option>
          <option>0.5</option>
          <option>0.9</option>
        </select>
    )   
}     

export default SelectTransparency;