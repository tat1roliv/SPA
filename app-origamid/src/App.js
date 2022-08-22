import AppExUm  from './components/AppExUm';
import ListaExibe  from './components/ListaExibe';
import AppExDois from './components/AppExDois';
import Evento from './components/Evento';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {

  return (
    <div>
      <Header />
      <Form />
      <AppExUm />
      <ListaExibe />
      <AppExDois />
      <Evento />
      <Footer />
    </div>
  );
}

export default App;
