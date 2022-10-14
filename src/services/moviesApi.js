import axios from 'axios'
const token = sessionStorage.getItem('token')
const apiMovies = axios.create({
    baseURL: 'http://localhost:3080/api/',
    Authoriazion: token
})
export default apiMovies