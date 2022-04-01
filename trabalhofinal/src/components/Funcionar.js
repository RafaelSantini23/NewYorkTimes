import { useEffect, useState } from "react";
import api from "../api";
const Funcionar = () => {
  const [loading, setLoading] = useState(true);
  const getNews = async () => {
    setLoading(false);
    try {
      const { data } = await api.get(
        "arts.json?api-key=LK7ZHPbBRzDb2WvGKTWDDOJmkjKppZ80"
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!loading) {
    getNews();
  }
  return <div>a</div>;
};

export default Funcionar;
