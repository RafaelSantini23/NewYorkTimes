import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";

const Funcionar = () => {
  const { teste } = useContext(NewsContext)
  return (
  <div>
      {teste}
  </div>
 )
};

export default Funcionar;
