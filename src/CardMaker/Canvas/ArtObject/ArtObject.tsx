import { ArtObject } from "../../CardMakerTypes";
import elementStyles from "../../Canvas/Component.module.css";

type ArtObjectProps = {
  artObject: ArtObject
}

function ArtObjectComponent(props: ArtObjectProps) {
  const style = {
    left: props.artObject.x,
    top: props.artObject.y,
    width: props.artObject.width,
    height: props.artObject.height,
  }

  return (
    <img className={elementStyles.component} src={props.artObject.src}  style={style} />
  );
}

export default ArtObjectComponent;