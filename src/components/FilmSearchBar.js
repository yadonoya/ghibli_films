import { useState } from 'react';

import '../styles/FilmImageSearchBar.css';

function FilmSearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);

        setTerm('');
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className='film-search-bar'>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} placeholder='Search Ghibli films for...'/>
            </form>
        </div>
    )
}

export default FilmSearchBar;