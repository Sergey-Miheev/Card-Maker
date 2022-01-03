import styles from "./Icon.module.css";

type IconProps = {
    iconSrc: string,
}

function Icon(props: IconProps) {
    return (        
        <img className={styles.save__icon} src={props.iconSrc} />
    )
}

export default Icon;