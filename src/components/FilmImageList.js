import FilmImageShow from "./FilmImageShow";

function FilmImageList({ films }) {
    const displayFilms = films.map((film) => {
        return <FilmImageShow key={film.id} film={film} />
    })

    return <div>{displayFilms}</div>
}

export default FilmImageList;