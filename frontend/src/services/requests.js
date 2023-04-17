import Axios from "axios";

const post = async (site, category, search) => {
  const { data } = await Axios.post("http://localhost:3000/product", {
    site,
    category,
    search,
  });
  return JSON.parse(data);
};

export default post;
