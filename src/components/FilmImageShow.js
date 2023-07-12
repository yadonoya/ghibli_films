import './FilmImageShow.css';
import { Link } from "react-router-dom";

function FilmImageShow({ film }) {
    return <div className='film-image-show'>
        {film.title}
        {film.release_date}
        <Link to={film.id}>
            <img src={film.image} alt={film.title}/>
        </Link>
    </div>
}

export default FilmImageShow;