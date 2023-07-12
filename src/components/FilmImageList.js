import FilmImageShow from "./FilmImageShow";

import './FilmImageList.css';

function FilmImageList({ films, term }) {
    const displayFilms = films.map((film) => {
        return <FilmImageShow  key={film.id} film={film} />
    })

    return <div className='film-image-list'>{displayFilms}</div>
}

export default FilmImageList;