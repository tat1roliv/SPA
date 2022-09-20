import { Provider } from 'react-redux'; 
import store from './store';

function App() { 
  return (
    <Provider store={store}>
      <div>
        <header>
          <h1>Contador de cliques</h1>
        </header>
      </div>
    </Provider>
    );
  }
export default App;
