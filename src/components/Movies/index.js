import './style.css';
import cover1 from '../../assets/img/cover1.png';
//import axios from 'axios';

export default function Movies(){
    /*const promiseFilms = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
    promiseFilms.then(response =>{
        const filmsArray = response.data.map(
            (item) => (
                <MovieCard imgsrc={item.posterURL} />
            )
        );
    });*/

    return(
        <div className="container">
            <div className='text displayNone'>Selecione o Filme</div>
            <div className='containerMovieCards'>
                
                <MovieCard imgsrc={cover1}/>
                <MovieCard imgsrc={cover1}/>
                <MovieCard imgsrc={cover1}/>
                <MovieCard imgsrc={cover1}/>
                <MovieCard imgsrc={cover1}/>
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