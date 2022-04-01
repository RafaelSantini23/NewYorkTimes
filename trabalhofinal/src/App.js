import { React } from "react";
import Home from "./pages/Home";
import NewsProvider from "./contexts/NewsContext";

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
