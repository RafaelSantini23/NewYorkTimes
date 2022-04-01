
import { createContext } from "react";

export const NewsContext = createContext();

function NewsProvider({ children }) {
 
  return (
    <NewsContext.Provider>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
