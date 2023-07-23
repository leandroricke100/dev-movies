import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '8e78cb9ca22166ad19d586d60bef4b32',
    language: 'pt-BR',
    page: 1,
  },
})

export default api
