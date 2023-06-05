import './App.css';
import Header from './components/Header.js'
import ItemListComponent from './components/ItemListComponent.js'

function App() {
  return (
    <div style={{backgroundColor:"#e0e0e0"}}>
    <div>
      <Header bgMain="rgb(204, 203, 203)"/>
      </div>
      <div className='body'>
        <ItemListComponent  saludo = "BIENVENIDOS"/>
      </div>
      </div>
  );
}

export default App;