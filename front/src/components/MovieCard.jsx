import {link} from 'react';

const MovieCard = ({movie}) => {
    return (
        <link to={`/movie/${movie.id}`} className='songle-movie-card'>
            <div className='movie-img'>
                <img src={movie.posterUrl } alt={movie.Title} />
            </div>

            <div className='movie-details'>
                <h2>{movie.Title}{movie.year}{movie.runtime}</h2>
            </div>
        </link>
    )
}

export default MovieCard;