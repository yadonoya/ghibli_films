import { useState, useEffect } from 'react';

import FilmImageList from './components/FilmImageList';
import FilmSearchBar from './components/FilmSearchBar';

import axios from 'axios';


const filmsURL = 'https://ghibliapi.vercel.app/films';

function App() {
    const [films, setFilms] = useState([]);


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

    return (
        <div>
            <FilmSearchBar onSubmit={handleSubmit}/>
            <FilmImageList films={films} />
        </div>

    )
}

export default App;