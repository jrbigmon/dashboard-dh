import { useState, useEffect } from 'react';
import api from '../../services/moviesApi';
import { Link } from 'react-router-dom'

function TableComponent (){
    const [movies, setMovies] = useState([]);

    async function loadMovies() {
        const response = await api.get('/movies')
        setMovies(response.data)
    }

    useEffect(() => {
        loadMovies()
    })

 return (
   <div>
    <h1 className="text-center">Tabela de Filmes</h1>
     <table className="mr-2 ml-2 table table-dark table-striped">
            <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Classificação</th>
            <th>Prêmios</th>
            <th>Duração</th>
            <th>Gênero</th>
            </tr>
            {
                movies.map((movie, index) =>
                        <tr key={index}>
                            <td>{movie.id}</td>
                            <td><Link to={'/movies/detail/'+ movie.id}> {movie.title} </Link></td> 
                            <td>{movie.rating}</td>
                            <td>{movie.awards}</td>
                            <td>{movie.length} min</td>
                            <td>{movie.genre_id ? movie.genres.name : ''}</td>
                        </tr>
                )
            }
        </table>
   </div>
 )
}

export default TableComponent;