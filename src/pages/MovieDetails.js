import { useParams, useOutletContext } from "react-router-dom";

import '../styles/MovieDetails.css';

function MovieDetails() {
    const { id } = useParams();
    const [films] = useOutletContext();

    const matchedFilm = films.find(film => film.id === id);

    return (
        <div className="movie-details">
            <div className="detail-card">
                <div className="film-image-header">
                    <img src={matchedFilm.image} alt={matchedFilm.title} className="film-image" />
                </div>
                <div className="info-container">
                    <div className="movie-info">
                        <p>Film Title:</p>
                        <p>{matchedFilm.title}</p>
                    </div>
                    <div className="movie-info">
                        <p>Original Title:</p>
                        <p>{matchedFilm.original_title}</p>
                    </div>
                    <div className="movie-info">
                        <p>Romanised Title:</p>
                        <p>{matchedFilm.original_title_romanised}</p>
                    </div>
                    <div className="movie-info">
                        <p>Director:</p>
                        <p>{matchedFilm.director}</p>
                    </div>
                    <div className="movie-info">
                        <p>Producer:</p>
                        <p>{matchedFilm.producer}</p>
                    </div>
                    <div className="movie-info">
                        <p>Release Date:</p>
                        <p>{matchedFilm.release_date}</p>
                    </div>
                    <div className="movie-info">
                        <p>Running Time:</p>
                        <p>{matchedFilm.running_time} minutes</p>
                    </div>
                    <div className="movie-info description">
                        <p>{`Description:    ${matchedFilm.description}`}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails;