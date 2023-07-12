import { useParams, useOutletContext } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [films] = useOutletContext();

    const matchedFilm = films.find(film => film.id === id);

    console.log("Did this work: ", matchedFilm.title);
    return (<div>
            Testing movie showers {id} 
        </div>
    )
}

export default MovieDetails;