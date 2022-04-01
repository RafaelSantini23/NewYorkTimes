import { NewsContext } from "../contexts/NewsContext";
import { useContext, useEffect, useState } from "react";
const Funcionar = () => {
  const { getNews, dados } = useContext(NewsContext);
  useEffect(() => {
    getNews();
    console.log(dados);
  }, []);
  return <div>Guilherme se lascou</div>;
};

export default Funcionar;
