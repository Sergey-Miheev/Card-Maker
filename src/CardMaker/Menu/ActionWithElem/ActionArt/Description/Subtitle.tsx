import styles from "./Subtitle.module.css";

type TextProps = {
    text: string,
}

function Subtitle(props: TextProps) {
    return (        
        <span className={styles.text}>
            {props.text}
        </span>    
    )
}

export default Subtitle;