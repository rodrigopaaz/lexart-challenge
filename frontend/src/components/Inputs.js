import React, { useContext, useState } from "react";
import post from "../services/requests";
import AppContext from "../context/Context";

export default function Inputs() {
  const [site, setSite] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const { setProducts, setIsLoading } = useContext(AppContext);

  const siteSwitch = async () => {
    setIsLoading(true);
    if (site === "mercado livre") {
      const data = await post(site, category, search);
      setProducts(data);
      setIsLoading(false);
      return data;
    }
    if (site === "buscape") {
      const data = await post(site, category, search);
      setProducts(data);
      setIsLoading(false);
      return data;
    }
    const buscape = await post("buscape", category, search);
    const meli = await post("mercado livre", category, search);
    setProducts([...buscape, ...meli]);
    setIsLoading(false);
  };

  return (
    <div className="div__inputs">
      <label htmlFor="category">
        <select
          type="text"
          onChange={({ target: { value } }) => setSite(value)}
        >
          <option value="" disabled selected hidden>
            Web
          </option>
          <option value="ambos">Todas</option>
          <option value="mercado livre">MercadoLivre</option>
          <option value="buscape">Buscapé</option>
        </select>
      </label>
      <label htmlFor="site">
        <select
          type="text"
          onChange={({ target: { value } }) => setCategory(value)}
        >
          <option value="" disabled selected hidden>
            Categorias
          </option>
          <option value="geladeira">Geladeira</option>
          <option value="tv">TV</option>
          <option value="celular">Celular</option>
        </select>
      </label>

      <label type="text">
        <input
          placeholder="Type your search here"
          type="text"
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </label>
      <button
        type="button"
        onClick={async () => {
          setProducts([]);
          await siteSwitch();
        }}
      >
        Search
      </button>
    </div>
  );
}
