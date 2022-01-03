import styles from "./Text.module.css";

type TextProps = {
    text: string,
}

function Text(props: TextProps) {
    return (        
        <span className={styles.text}>
            {props.text}
        </span>    
    )
}

export default Text;