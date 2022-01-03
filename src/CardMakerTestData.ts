import {
    CardMaker,
    Canvas,
    Image,
    TextComponent,
    ArtObject,
    SetOfArtObjects,
    Background,
    Filter,
    StateHistory,
} from "./CardMaker/CardMakerTypes"
    
const TestFilter: Filter = {
    color: 'white',
    transparency: 0.8
}

const TestBackground: Background = {
    color: '#FECA3A',
    src: null
} 

const TestImage: Image = {
    width: 300,
    height: 300,
    type: 'img',
    x: 650,
    y: 300,
    id: 1,
    src: 'https://images.pexels.com/photos/36767/tree-natur-nightsky-cloud.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}

const TestArtObj: ArtObject = {
    id: 2,
    type: 'artObj',
    width: 150,
    height: 150,
    x: 380,
    y: 350,
    src: SetOfArtObjects.BLM,
} 

const TestTextComponent: TextComponent = {
    width: 50,
    height: 10,
    id: 3,
    type: 'text',
    x: 400,
    y: 600,
    data: '17.12.2021',
    fontSize: 30,
    bold: false,
    italic: false,
    underline: false,
    color: 'black',
    font: 'Arial',
} 

const TestCanvas: Canvas= {
    displayList: [1, 2, 3],
    width: 800,
    height: 600,
    filter: TestFilter,
    elementList: [
      TestTextComponent,
      TestImage,
      TestArtObj,
    ], 
    background: TestBackground,
    area: null,
}

const TestStateHistory: StateHistory = {
    listState: [TestCanvas],
    currentIndex: 1
}

export const TestCardMaker: CardMaker = {
    canvas: TestCanvas,
    patterns: [TestCanvas],
    selectedObject: 1,
    stateHistory: TestStateHistory,
}
