import { TextComponent } from "../../CardMakerTypes";
import elementStyles from "../../Canvas/Component.module.css";

type TextProps = {
    textComponent: TextComponent
}

function TextComponentBlock(props: TextProps) {
  const style = {
    left: props.textComponent.x,
    top: props.textComponent.y,
    color: props.textComponent.color,
    fontSize: props.textComponent.fontSize,
    fontWeight: props.textComponent.bold ? 700 : 400,
    textDecoration: props.textComponent.underline ? 'underline' : 'none',
    fontStyle: props.textComponent.italic ? 'italic' : 'normal',
    fontFamily: props.textComponent.font,
  }

  return (
    <span className={elementStyles.component} style={style}>{props.textComponent.data}</span>
  );
}

export default TextComponentBlock;