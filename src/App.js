import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import SingleItem from "./components/Product/SingleItem/SingleItem";
import Profil from "./components/Profil/Profil";
import SingleOrder from "./components/Profil/ProfilOrder/Order/SingleOrder/SingleOrder";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="evins">
      <NavBar />
      {/* <Home />
      <ShoppingCart />
      <SingleItem /> */}
      <Profil />
      <SingleOrder />
    </div>
  );
}

export default App;
