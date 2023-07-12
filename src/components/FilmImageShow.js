function FilmImageShow({ film }) {
    return <div>
        {film.title}
        {film.release_date}
        <img src={film.image} alt={film.title}/>
    </div>
}

export default FilmImageShow;