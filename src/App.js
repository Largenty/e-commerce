import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="evins">
      <NavBar />
      {/* <Home />    */}
      <ShoppingCart />
    </div>
  );
}

export default App;
