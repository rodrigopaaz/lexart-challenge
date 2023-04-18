import React, { useMemo, useState } from "react";
import AppContext from "./Context";

export default function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [site, setSite] = useState(null);
  const data = useMemo(
    () => ({
      products,
      setProducts,
      isLoading,
      setIsLoading,
      category,
      setCategory,
      search,
      setSearch,
      site,
      setSite,
      filter,
      setFilter,
    }),
    [
      products,
      setProducts,
      isLoading,
      setIsLoading,
      search,
      setSearch,
      category,
      setCategory,
      site,
      setSite,
      filter,
      setFilter,
    ]
  );

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {}.isRequired;
