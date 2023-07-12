import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationLogic({ filmsPerPage, totalFilms, paginate }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <Stack spacing={2}>
        <Pagination onChange={(event, page) => paginate(page)} count={3} variant="outlined">
            <ul>
                {pageNumbers.map(num => (
                    <li key={num}>
                        <a href='#!'>
                            {num}
                        </a>
                    </li> 
                ))}
            </ul>
        </Pagination>
    </Stack>
  )
}

export default PaginationLogic;