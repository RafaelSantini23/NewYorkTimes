import { React } from "react";
import Home from "./pages/Home";
import NewsProvider from "./contexts/NewsContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <NewsProvider>
        <Home />
      </NewsProvider>
    </div>
  );
};

export default App;
