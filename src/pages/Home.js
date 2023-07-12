import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Header from "../components/Header";
import FilmSearchBar from "../components/FilmSearchBar";
import FilmImageList from "../components/FilmImageList";

import axios from 'axios';

const filmsURL = 'https://ghibliapi.vercel.app/films';

function Home() {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    const { id } = useParams();

    const handleSubmit = (term) => {
        console.log('Search Ghibli films for the film: ', term);
    }

    useEffect(() => {
        async function fetchFilmData() {
            const request = await axios.get(filmsURL);
            setFilms(request.data);
            setPeople(request.data.people);
        }
        fetchFilmData();
    },[])

    console.log(films);
    console.log(people);

    return (
        <div>
            <Header />
                {!id&&<FilmSearchBar onSubmit={handleSubmit}/>}
                {!id&&<FilmImageList films={films} />}
            <Outlet context={[films, setFilms]}/>
        </div>
    )
}

export default Home;