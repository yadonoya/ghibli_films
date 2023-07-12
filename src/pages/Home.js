import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Header from "../components/Header";
import FilmSearchBar from "../components/FilmSearchBar";
import FilmImageList from "../components/FilmImageList";
import PaginationLogic from '../components/PaginationLogic';

import axios from 'axios';

const filmsURL = 'https://ghibliapi.vercel.app/films';

function Home() {
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(10);


    const { id } = useParams();

    const handleSubmit = (term) => {
        console.log('Search Ghibli films for the film: ', term);
    }

    useEffect(() => {
        async function fetchFilmData() {
            const request = await axios.get(filmsURL);
            setFilms(request.data);
        }
        fetchFilmData();
    },[])

    // Get current films
    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

    //Change Page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    } 


    return (
        <div>
            <Header />
                {!id&&<FilmSearchBar onSubmit={handleSubmit}/>}
                {!id&&<FilmImageList films={currentFilms} />}
                <PaginationLogic filmsPerPage={filmsPerPage} totalPosts={films.length} paginate={paginate} />
            <Outlet context={[films, setFilms]}/>
        </div>
    )
}

export default Home;