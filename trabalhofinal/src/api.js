import axios from "axios";
export default axios.create({
  baseURL:
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s05Sx5jGH6WtARzYazE9xMOa80lBSvd3",
});
