import React, { useState } from "react";
import { createContext } from "react";
import api from "../api";
export const NewsContext = createContext();

function NewsProvider({ children }) {
  const [dados, setDados] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [dado, setDado] = useState([]);

  const getNews = async () => {
    try {
      const { data } = await api.get();
      setDados(data);
      setLoading(false);
      console.log(dados);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewsContext.Provider value={{ getNews, dados }}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
