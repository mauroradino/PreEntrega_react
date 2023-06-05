import './App.css';
import Header from './components/navbar.js'
import ItemListComponent from './components/ItemListComponent.js'
import CardWidget from './components/cardWidget.js'

function App() {
  return (
    <div style={{backgroundColor:"#e0e0e0"}}>
    <div className='header'>
      <Header bgMain="rgb(204, 203, 203)"/>
      <CardWidget />
      </div>
      <div className='body'>
        <ItemListComponent  greeting = "BIENVENIDOS"/>
      </div>
      </div>
  );
}

export default App;