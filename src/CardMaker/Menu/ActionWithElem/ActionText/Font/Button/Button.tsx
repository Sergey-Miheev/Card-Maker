import styles from "./Button.module.css";

type TextProps = {
    text: string,
}

function Create(props: TextProps) {
    return (        
        <button className={styles.create}>
            {props.text}
        </button>    
    )
}

export default Create;