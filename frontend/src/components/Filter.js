import React, { useContext, useState } from "react";
import AppContext from "../context/Context";

export default function Filter() {
  const { setFilter } = useContext(AppContext);
  const [toogleFilter, setToogleFilter] = useState("");
  return (
    <div>
      <label htmlFor="filter">
        Ordernar por:
        <select
          type="text"
          onChange={({ target: { value } }) => setToogleFilter(value)}
        >
          <option value="higth">Maior Preço</option>
          <option value="low">Menor Preço</option>
        </select>
        <button type="button" onClick={() => setFilter(toogleFilter)}>
          Filtrar
        </button>
      </label>
    </div>
  );
}
