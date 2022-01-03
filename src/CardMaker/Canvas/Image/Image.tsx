import { Image } from "../../CardMakerTypes";
import elementStyles from "../../Canvas/Component.module.css";

type ImageProps = {
    imageComponent: Image
}

function ImageComponent(props: ImageProps) {
  const style = {
    left: props.imageComponent.x,
    top: props.imageComponent.y,
    width: props.imageComponent.width,
    height: props.imageComponent.height,
  }

  return (
    <img className={elementStyles.component} src={props.imageComponent.src} style={style} />
  );
}

export default ImageComponent;