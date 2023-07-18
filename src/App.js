import {useState} from 'react';
import './App.css';
import NavBars from './Components/Navbars/NavBars';
import {moviesData} from './Components/Data/Data';
import ListMovie from './Components/ListMovies/ListMovie';
import FilterMovies from './Components/FilterMovies/FilterMovies';
import AddMovie from './Components/AddMovie/AddMovie';
import Carousls from './Components/Carousels/Carousls';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Components/Trailer';


function App() {


    const [movies, SetMovies] = useState(moviesData)

    const [inputSearch, setInputSearch] = useState("")
    const [rateSearch, setRateSearch] = useState(0)

    console.log(rateSearch)
    const add = (newMovie) => {
        SetMovies([
            ...movies,
            newMovie
        ])
    }


    return (
        <div className="App">
            <NavBars/>
            <Carousls/>
            <FilterMovies inputSearch={inputSearch}
            setInputSearch={setInputSearch}
            rateSearch={rateSearch}
            setRateSearch={setRateSearch}/>
            <AddMovie add={add}/>
            <Routes >
            <Route path='/' element={ <ListMovie movies={movies}
            inputSearch={inputSearch}
            rateSearch={rateSearch}/>} />
            <Route path='/trailer/:id' element={<Trailer   />} />
            
            </Routes>
        </div>
        
    );
}


export default App;
