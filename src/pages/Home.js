import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Header from "../components/Header";
import FilmSearchBar from "../components/FilmSearchBar";
import FilmImageList from "../components/FilmImageList";
import PaginationLogic from '../components/PaginationLogic';

import axios from 'axios';

const filmsURL = 'https://ghibli.rest/films';

function Home() {
    const [films, setFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(10);


    const { id } = useParams();

    const handleSubmit = (term) => {
        const normalizedTerm = term.toLowerCase();
        const filteredFilmArray = films.filter(film => film.title.toLowerCase().includes(normalizedTerm))
        setFilteredFilms(filteredFilmArray);
    }

    useEffect(() => {
        async function fetchFilmData() {
            const request = await axios.get(filmsURL);
            setFilms(request.data);
        }
        fetchFilmData();
    },[])

    // Film Source toggle for pagination and filtering
    const filmSource = filteredFilms.length ? filteredFilms : films;


    // Get current films
    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = filmSource.slice(indexOfFirstFilm, indexOfLastFilm);

    //Change Page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    } 


    return (
        <div>
            <Header />
                {!id&&<FilmSearchBar onSubmit={handleSubmit}/>}
                {!id&&<FilmImageList films={currentFilms} filteredFilms={filteredFilms} />}
                {!id&&<PaginationLogic filmsPerPage={filmsPerPage} totalFilms={filmSource.length} paginate={paginate} />}
            <Outlet context={[films, setFilms]}/>
        </div>
    )
}

export default Home;