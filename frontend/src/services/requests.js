import Axios from "axios";
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST


const post = async (site, category, search) => {
  try {
    const { data } = await Axios.post(`http://${HOST}:${PORT}/product`, {
      site,
      category,
      search,
    });
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export default post;
