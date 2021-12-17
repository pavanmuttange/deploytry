import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import Services from './Services';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from './Nav'


function App() {
  return (
    <div>
    <Nav />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Redirect to="/" />
    </Switch>
    </div>
  );
}

export default App;
