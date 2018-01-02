import React from "react";
import Menus from "./pages/Menus";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {BrowserRouter as Router, 
  Route,
  Switch} from 'react-router-dom';

const App = () =>
<Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path='/' component={Menus}  />
      <Route exact path='/menus' component={Menus}  />
      <Route exact path='/menus/:id' component={Detail}  />
      
      <Route component={NoMatch} />
    </Switch>
  </div>
 </Router>; 

export default App;
