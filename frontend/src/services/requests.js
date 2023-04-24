import Axios from 'axios'

const post = async (site, category, search, host) => {
  const setHost = host ? `https://${host}` : 'http://localhost:3000'
  try {
    const { data } = await Axios.post(`${setHost}/product`, {
      site,
      category,
      search
    })
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

export default post
