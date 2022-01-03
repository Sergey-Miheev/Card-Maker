import styles from "./Text.module.css";

type TextProps = {
    text: string,
}

function Text(props: TextProps) {
    return (        
        <span className={styles.save__text}>
            {props.text}
        </span>    
    )
}

export default Text;