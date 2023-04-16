import { useState } from "react";
import "./styles/app.css";
import Axios from "axios";
import ItemCard from "./components/ItemCard";

function App() {
  const [site, setSite] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const post = async (url) => {
    const { data } = await Axios.post("http://localhost:3006/product", {
      site: url,
      category,
      search,
    });
    return JSON.parse(data);
  };

  const toogleSites = async () => {
    if (site === "mercado livre") {
      const data = await post(site);
      setProducts(data);
      return data;
    }
    if (site === "buscape") {
      const data = await post(site);
      setProducts(data);
      return data;
    }
    const buscape = await post("buscape");
    const meli = await post("mercado livre");
    setProducts([...buscape, ...meli]);
  };

  return (
    <div className="App">
      <div className="div__inputs">
        <label htmlFor="site">
          <select
            type="text"
            onChange={({ target: { value } }) => setCategory(value)}
          >
            <option value="" disabled selected hidden>
              Web
            </option>
            <option value="geladeira">Geladeira</option>
            <option value="tv">TV</option>
            <option value="celular">Celular</option>
          </select>
        </label>
        <label htmlFor="category">
          <select
            type="text"
            onChange={({ target: { value } }) => setSite(value)}
          >
            <option value="" disabled selected hidden>
              Categorias
            </option>
            <option value="ambos">Todas</option>
            <option value="mercado livre">MercadoLivre</option>
            <option value="buscape">Buscapé</option>
          </select>
        </label>
        <label type="text">
          <input
            placeholder="Type your search here"
            type="text"
            onChange={({ target: { value } }) => setSearch(value)}
          />
        </label>
        <button type="button" onClick={async () => await toogleSites()}>
          Search
        </button>
      </div>
      {
        <div className="div__items">
          {products.map((item) => (
            <ItemCard product={item} />
          ))}
        </div>
      }
    </div>
  );
}

export default App;
