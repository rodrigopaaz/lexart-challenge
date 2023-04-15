import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [site, setSite] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const get = async () => {
    const test = await Axios.get("http://localhost:3003/product");
    return test;
  };

  const post = async () => {
    /*   await Axios.get("http://localhost:3003/product");
     */
    //const buscapeCategory = `search?q=${category} ${postQuery}`;

    const { data } = await Axios.post("http://localhost:3006/product", {
      site,
      category,
      search,
    });
    setProducts(JSON.parse(data));
    return data;
  };

  return (
    <div className="App">
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
          <option value="Todas">Todas</option>
          <option value="mercado livre">MercadoLivre</option>
          <option value="buscape">Buscapé</option>
        </select>
      </label>
      <label type="text">
        text
        <input
          type="text"
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </label>
      <button type="button" onClick={async () => await post()}>
        ok
      </button>
      {
        <div>
          {products.map((product) => (
            <div>
              <p>{product.title}</p>
              <p>{`R$${product.price}`}</p>
              <img src={product.imageUrl} alt="productImage" />
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
