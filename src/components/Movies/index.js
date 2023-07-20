import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Movies(){
    const [filmsArray, setFilmsArray] = useState([]);

    useEffect(() => {
        const promiseFilms = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        promiseFilms.then(response => {
            const data = response.data;
    
            const movies = data.map(item => (
                    <MovieCard imgsrc={item.posterURL} movieId={item.id} />
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

function MovieCard({imgsrc, movieId}){
    return(
        <div className="card" key={movieId}>
            <Link to={`/sections/${movieId}`}>
                <img src={imgsrc} alt="film cover"/>
            </Link>
        </div>
    );
}