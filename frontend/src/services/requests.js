import Axios from 'axios';

const post = async (site, category, search, host) => {
  try {
    const { data } = await Axios.post(`https://${host}/product`, {
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
