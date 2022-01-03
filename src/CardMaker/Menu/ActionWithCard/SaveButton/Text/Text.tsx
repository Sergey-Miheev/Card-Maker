import styles from "./Text.module.css";

type TextProps = {
    text: string,
}

function Text(props: TextProps) {
    return (        
        <p className={styles.save__text}>
            {props.text}
        </p>    
    )
}

export default Text;