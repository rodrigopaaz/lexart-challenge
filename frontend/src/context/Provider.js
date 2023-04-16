import React, { useMemo, useState } from "react";
import AppContext from "./Context";

export default function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const data = useMemo(
    () => ({
      products,
      setProducts,
      isLoading,
      setIsLoading,
    }),
    [products, setProducts, isLoading, setIsLoading]
  );

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {}.isRequired;
