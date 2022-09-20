import { BrowserRouter as Router,
        Switch,
        Route, 
      } from 'react-router-dom';
        //import { Route, Switch } from "react-router";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import NotFound from './components/NotFound.jsx';
import ExemploQuery from './components/ExemploQuery';


function App() {
  return (
    <Router >
      <div>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />
          <Route path="*" component={NotFound} />
          <Route path="/query" component={ExemploQuery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
