import logo from './logo.svg';
import './App.css';
import HolaMundo, {AdiosMundo} from "./componentes/HolaMundo";
import AdiosMundo2 from "./componentes/AdiosMundo2";
import Saludar from "./componentes/Saludar";

function App() {

  const info = {
    nombre : "Rogelio Daniel",
    apellido : "Gonzalez Nieto",
    edad : 29,
    color : "verde"
  };


  const saludar2 = (name) => {
    //alert("Hola " + name );
    alert (`Hola ${name}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Daniel es chido
        </p>
        <HolaMundo/>
        <AdiosMundo2/>
        <Saludar userInfo={info} saludar2={saludar2}/>
       
      </header>
    </div>
  );
}

export default App;
