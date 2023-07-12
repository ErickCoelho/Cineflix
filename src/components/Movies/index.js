import './style.css';
import cover1 from '../../assets/img/cover1.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Movies(){
    const [filmsArray, setFilmsArray] = useState([]);

    useEffect(() => {
        const promiseFilms = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        promiseFilms.then(response => {
            const data = response.data;
    
            const movies = data.map(item => (
                    <MovieCard imgsrc={item.posterURL} />
                )
            );
            setFilmsArray(movies);
        });
    
        console.log(filmsArray);
    }, []);


    return(
        <div className="container">
            <div className='text'>Selecione o Filme</div>
            <div className='containerMovieCards'>
                {filmsArray}
            </div>
        </div>
    );
}

function MovieCard({imgsrc}){
    return(
        <div className="card">
            <img src={imgsrc} alt="film cover"/>
        </div>
    );
}