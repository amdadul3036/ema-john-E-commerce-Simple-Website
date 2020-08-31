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
import NotFound from './component/NotFound/NotFound';
import ProductDetail from './component/ProductDetail/ProductDetail';


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

             <Route exact path="/">
               {/* exact na dile ei router er pore joto router asbe tader sobar jonno ei "/" path follow korbe.tai obviously exact dite hobe jodi "/" path er pore ar kono router thake. */}
                 <Shop></Shop>  
             </Route>
             {/* Eta (Line 33-35) deya hoy karon by default koi thakbe user dhukar porei. <Shop></Shop> mane dhukar porei shop e thakbe. */}

             <Route path = "/:productKey">
                 <ProductDetail></ProductDetail>
             </Route>
             {/* Ei Router * er age dite hobe. Karon * tar niche jakei pabe takei catch kore felbe. */}
             <Route path="*">
                 <NotFound></NotFound>
                 {/* Jodi keu vul link search dey taile ei * path e jabe. */}
             </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
