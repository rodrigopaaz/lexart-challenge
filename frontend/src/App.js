import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [site, setSite] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const getAll = async (site, category) => {
    /*   await Axios.get("http://localhost:3003/product");
     */
    const { data } = await Axios.post("http://localhost:3006/product", {
      site: site,
      category: category,
    });
    setProducts(JSON.parse(data));
    console.log(data);
    return data;
  };

  return (
    <div className="App">
      <label htmlFor="site">
        site
        <input
          type="text"
          onChange={({ target: { value } }) => setSite(value)}
        />
      </label>
      <label htmlFor="category">
        category
        <input
          type="text"
          onChange={({ target: { value } }) => setCategory(value)}
        />
      </label>
      <button type="button" onClick={async () => await getAll(site, category)}>
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
