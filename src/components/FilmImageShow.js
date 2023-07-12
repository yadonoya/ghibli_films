function FilmImageShow({ film }) {
    return <div>
        <img src={film.image} alt={film.title}/>
        {film.title}
        {film.release_date}
    </div>
}

export default FilmImageShow;