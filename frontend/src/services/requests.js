import Axios from "axios";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'lexart-challenge-83h9aq2wa-rodrigopaaz.vercel.app'


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
