import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
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