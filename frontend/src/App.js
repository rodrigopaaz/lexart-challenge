import { useState } from "react";
import "./App.css";
import Axios from "axios";

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

  const postSite = async () => {
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

  const siteArray = site.replace(/\s/g, "").split(",");
  console.log(siteArray);

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
          <option value="ambos">Todas</option>
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
      <button type="button" onClick={async () => await postSite()}>
        ok
      </button>
      {
        <div>
          {products.map((product) => (
            <div>
              <p>{product.siteId === 1 ? "Mercado Livre" : "Buscapé"}</p>
              <div>
                <p>{product.title}</p>
                <p>{`R$${product.price}`}</p>
                <img src={product.imageUrl} alt="productImage" />
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
