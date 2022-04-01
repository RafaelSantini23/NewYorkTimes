import { createContext, useState } from "react";
import api from '../api'


export const NewsContext = createContext()

function NewsProvider({children}) {

  const [ dados, setDados ] = useState({})

  const getNews = async (categoria) => {
    try {
      const { data } = await api.get(`${categoria}.json?api-key=LK7ZHPbBRzDb2WvGKTWDDOJmkjKppZ80`);
      setDados(data.results)
      console.log(data);
      console.log(dados);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <NewsContext.Provider value={{ getNews, dados }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;