import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

//import MenuBar from './components/MenuBar'
import Home from './pages/Home';
import Coin from './pages/Coin';
import Door from './pages/Door';
import Baby from './pages/Baby';



function App(){
  return (
    <Router>
        <Route exact path ='/' component = {Home}/>
        <Route exact path ='/Coin' component = {Coin}/>
        <Route exact path ='/Door' component = {Door}/>
        <Route exact path ='/Baby' component = {Baby}/>
    </Router>
  );
}

export default App;
