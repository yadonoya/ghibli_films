import { useState } from 'react';

import './FilmImageSearchBar.css';

function FilmSearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className='film-image-search-bar'>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} placeholder='Enter Ghibli film to search for...'/>
            </form>
        </div>
    )
}

export default FilmSearchBar;