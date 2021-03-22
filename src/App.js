import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import SingleItem from "./components/Product/SingleItem/SingleItem";
import Profil from "./components/Profil/Profil";
import SingleOrder from "./components/Profil/ProfilOrder/Order/SingleOrder/SingleOrder";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="evins">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/item/:id" component={SingleItem} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/order/:id" component={SingleOrder} />
          {/* <Route path="/*" component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
