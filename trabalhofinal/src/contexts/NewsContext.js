import React from "react";
import { createContext } from "react";

export const NewsContext = createContext();
function NewsProvider({ children }) {
  const teste = "Guilherme se lascou";
  return (
    <NewsContext.Provider value={{ teste }}>{children}</NewsContext.Provider>
  );
}

export default NewsProvider;
