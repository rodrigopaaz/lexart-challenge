import { useContext } from "react";
import "./styles/app.css";
import ItemCard from "./components/ItemCard";
import Loading from "./components/Loading";
import Inputs from "./components/Inputs";
import AppContext from "./context/Context";

function App() {
  const { products, isLoading } = useContext(AppContext);
  console.log(products);
  return (
    <div className="App">
      <Inputs />
      <div className="div__items">
        {!isLoading ? (
          products.map((item) => <ItemCard product={item} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
