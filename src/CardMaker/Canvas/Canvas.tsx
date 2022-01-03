import styles from './Canvas.module.css';
import { ArtObject, Canvas, Image, TextComponent } from '../CardMakerTypes';
import TextComponentBlock from './Text/Text';
import ImageComponent from './Image/Image';
import ArtObjectComponent from './ArtObject/ArtObject';

type CanvasProps = {
  canvas: Canvas,
}


function FunctCanvas(props: CanvasProps) {

  let background: string = '#ffffff';

  const color: string | null = props.canvas.background.color;
  const src: string | null = props.canvas.background.src;
  if (color !== null) {
    background = color;
  } else if (src !== null) {
    background = 'url(' + src + ')';
  }

  
  const style = {
    width: props.canvas.width,
    height: props.canvas.height,
    background: background,
  }

  const filterStyle = {
    background: props.canvas.filter.color,
    opacity: props.canvas.filter.transparency,
    width: props.canvas.width,
    height: props.canvas.height,
  }

  return (
    <div className={styles.canvas} style={style} >
      <div className={styles.filter} style={filterStyle}></div>
      {
        props.canvas.elementList.map(component => {
          switch (component.type) { 
            case 'text':
              return <TextComponentBlock textComponent={component as TextComponent} />;
            case 'img':
              return <ImageComponent imageComponent={component as Image} />;
            case 'artObj':
              return <ArtObjectComponent artObject={component as ArtObject} />; 
          }
        })
      }
    </div>
  );
}

export default FunctCanvas;