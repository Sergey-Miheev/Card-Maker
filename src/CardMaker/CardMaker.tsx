import { CardMaker } from "./CardMakerTypes";
import style from "./CardMaker.module.css";
import Menu from "./Menu/Menu";
import FunctCanvas from './Canvas/Canvas';


type CardMakerProps = {
  cardMaker: CardMaker
}

export function CardMakerApp(props: CardMakerProps) {
  return (
    <div className = {style.cardMaker} >
      <Menu />
      <FunctCanvas canvas = {props.cardMaker.canvas} />
    </div>
  )
}