import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FilmImageList from './components/FilmImageList';
import FilmSearchBar from './components/FilmSearchBar';

// Pages
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

import axios from 'axios';


const filmsURL = 'https://ghibliapi.vercel.app/films';

function App() {
    // const [films, setFilms] = useState([]);


    // const handleSubmit = (term) => {
    //     console.log('Search Ghibli films for the film: ', term);
    // }

    // useEffect(() => {
    //     async function fetchFilmData() {
    //         const request = await axios.get(filmsURL);
    //         setFilms(request.data);
    //     }
    //     fetchFilmData();
    // },[])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route path=':id' element={<MovieDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;