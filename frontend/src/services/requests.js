import Axios from "axios";

const PORT = process.env.PORT || 3000;

const post = async (site, category, search) => {
  const { data } = await Axios.post(`http://localhost:${PORT}/product`, {
    site,
    category,
    search,
  });
  return JSON.parse(data);
};

export default post;
