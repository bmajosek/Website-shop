import React from 'react'
import './App.css';
import Menu from "./Menu.js"
import Wystawy from './Wystawy.js'
import Home from './Home.js'
import Aktualnosci from './Aktualnosci.js'
import Informacje from './Informacje.js'
import Paleontologia from './Paleontologia.js'
import Gatunki from './Gatunki.js'
import Astronomia from './Astronomia.js'
import Archeologia from './Archeologia.js'
import Sklep from './Sklep.js'
import Koszyk from './Koszyk.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
  
  return (
    <Router>
    <div className="App">
      <Menu/>
       <Switch>
                    <Route exact path="/Wystawy" component={Wystawy} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Aktualnosci" component={Aktualnosci} />
                    <Route exact path="/Informacje" component={Informacje} />
                    <Route exact path="/Gatunki" component={Gatunki} />
                    <Route exact path="/Paleontologia" component={Paleontologia} />
                    <Route exact path="/Archeologia" component={Archeologia} />
                    <Route exact path="/Astronomia" component={Astronomia} />
                    <Route exact path="/Sklep" exact component={Sklep}/>
                    <Route exact path="/Sklep/Koszyk" component={Koszyk}/>
                    
                </Switch>
      
    </div>
    </Router>
  );
}

export default App;
