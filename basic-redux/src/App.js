import { Provider } from 'react-redux'; 
import store from './store';
import Contador from './components/Contador'
function App() { 
  return (
    <Provider store={store}>
      <div>
        <header>
          <h1>Contador de cliques</h1>
          <Contador />
        </header>
      </div>
    </Provider>
    );
  }
export default App;
