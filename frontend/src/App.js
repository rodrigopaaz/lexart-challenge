import { useContext, useEffect } from "react";
import "./styles/app.css";
import ItemCard from "./components/ItemCard";
import Loading from "./components/Loading";
import Inputs from "./components/Inputs";
import AppContext from "./context/Context";
import Filter from "./components/Filter";

function App() {
  const { products, setProducts, isLoading, category, site, filter } =
    useContext(AppContext);

  useEffect(() => {
    console.log(filter);
    if (filter === "higth") {
      const sortedArrayByHiest = products.sort((a, b) => +a.price - +b.price);
      setProducts(sortedArrayByHiest);
    }
    if (filter === "low") {
      const sortedArrayByLower = products.sort((a, b) => +b.price - +a.price);
      return setProducts(sortedArrayByLower);
    }
  }, [filter, products, setProducts]);

  const items = () => (
    <div className="div__items">
      {!isLoading ? (
        products
          /* .sort((a, b) => +a.price - +b.price) */
          .map((item) => <ItemCard product={item} />)
      ) : (
        <Loading />
      )}
    </div>
  );
  const message = () => {
    if (!products.length) {
      return <h4>Selecione acima o que procura</h4>;
    }
  };
  return (
    <div className="App">
      <Inputs />
      <Filter />
      {site && category ? items() : message()}
    </div>
  );
}

export default App;
