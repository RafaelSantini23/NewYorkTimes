import {  useEffect, useState } from "react";
import api from "../api";
const Funcionar = () => {

  const [dados, setDados] = useState([{}]);


  const getNews = async () => {
    try {
      const { data } = await api.get();
      setDados(data.results);
      console.log(data.results);
      console.log(dados);

      console.log(dados);
    } catch (error) {

      console.log(error);
    }
  };


  useEffect(() => {
    getNews();


  },[]);


 
  return (<div>
   
  </div>);
};

export default Funcionar;
