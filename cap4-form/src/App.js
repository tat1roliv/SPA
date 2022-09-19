import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center px-0 mx-0 pt-2 my-0">
            <h1 className="title" >Registro de Requisições</h1>
        </div>
        
        <div className="col-12 d-flex justify-content-center align-items-center px-0 mx-0 py-2 my-0">
            <Formulario />
        </div>


      </div>
    </div>
  );
}

export default App;

