import styles from "./Icon2.module.css";

type IconProps = {
    iconSrc: string,
}

function Icon(props: IconProps) {
    return (        
        <img className={styles.icon} src={props.iconSrc} />
    )
}

export default Icon;