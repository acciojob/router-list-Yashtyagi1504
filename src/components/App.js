
import React from "react";
import './../styles/App.css';
import { Route,Switch,Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Item1 from "./Item1.jsx";
import Item2 from "./Item2.jsx";
import Item3 from "./Item3.jsx";


const App = () => {
  
  return (
    <div>
      
      <Switch>
        <Route exact path="/">
        <div>
        <h1>Item List</h1>
      <ul>
          <li><Link to="/items/1">Item 1</Link></li>
          <li><Link to="/items/2">Item 2</Link></li>
          <li><Link to="/items/3">Item 3</Link></li>
        </ul>
      </div>
      </Route>
            <Route path="/items/1" component={Item1} />
            <Route path="/items/2" component={Item2} />
            <Route path="/items/3" component={Item3} />
            
          
        </Switch>

        {/* Do not remove the main div */}
    </div>
  )
}

export default App
