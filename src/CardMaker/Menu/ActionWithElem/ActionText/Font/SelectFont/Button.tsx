import styles from "./Button.module.css";


function SelectFont() {
    return (        
        <select className="text__names button">
          <option>Colibri</option>
          <option>Times New Roman</option>
          <option>Arial</option>
        </select>
    )   
}     

export default SelectFont;