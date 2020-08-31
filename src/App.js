import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';


function App() {
  return (
    <div>
      <Header></Header>
        <Router>
          <Switch>
             <Route path="/shop">
                 <Shop></Shop>
             </Route>

             <Route path="/review">
                 <Review></Review>
             </Route>

             <Route path="/inventory">
                 <Inventory></Inventory>
             </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
