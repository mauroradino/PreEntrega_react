import './App.css';
import NavBar from './components/NavBar.js'
import ItemListComponent from './components/ItemListComponent.js'


function App() {
  return (
    <div style={{backgroundColor:"#e0e0e0"}}>
    <div className='header'>
      <NavBar bgMain="rgb(204, 203, 203)"/>
      </div>
      <div className='body'>
        <ItemListComponent  greeting = "BIENVENIDOS"/>
      </div>
      </div>
  );
}

export default App;