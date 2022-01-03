import styles from "./Button.module.css";

type ButtonProps = {
    iconSrc: string,
}

function Arrow(props: ButtonProps) {
    return (
        <button>
            <img className={styles.icon} src={props.iconSrc} />
        </button>
    )
}

export default Arrow;