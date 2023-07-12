import { useState } from 'react';

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
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default FilmSearchBar;