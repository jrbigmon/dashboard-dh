import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import api from '../../services/moviesApi';

export default function MovieDetail () {
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    async function getMovie(){
        const response = await api.get(`/movies/detail/${id}`)
        setMovie(response.data)
    }
    
    useEffect ( () => {
        getMovie()
    })

    return (
        <div className="text-center">
            <h1>{movie.title}</h1>
            <h2>{movie.genre_id ? movie.genres.name : ''}</h2>
            <p>Prêmios recebidos: {movie.awards}</p>
            <p>Avaliação: {movie.rating}</p>
            <p>Tempo de filme: {movie.length} min</p>
        </div>
    )
}