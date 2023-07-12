import './FilmImageShow.css';

function FilmImageShow({ film }) {
    return <div className='film-image-show'>
        {film.title}
        {film.release_date}
        <img src={film.image} alt={film.title}/>
    </div>
}

export default FilmImageShow;