import './App.css';
import NavBar from './components/NavBar/NavBar';
import itemListContainer from './components/itemListContainer/itemListContainer';
import itemCount from './components/itemCount/itemCount';
function App() {
  return (
    <div className="App">
     <NavBar />
     <itemListContainer greeting={'bienvenido'} />
     <itemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
    </div>
  );
}

export default App;
