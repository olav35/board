import axios from 'axios'
const baseUrl = '/api/threads'


const getAll = async (key) => {
  const {data} = await axios.get(baseUrl, { headers: { key } }) 
  return data
}

export default { getAll }