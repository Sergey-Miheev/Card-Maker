import styles from "./Button.module.css";

type TextProps = {
    text: string,
}

function Style(props: TextProps) {
    return (        
        <button className={styles.style}>
            {props.text}
        </button>    
    )
}

export default Style;