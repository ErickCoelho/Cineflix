import './style.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Sections() {

    const [filmsTimeArray, setFilmsTimeArray] = useState([]);
    const [filmURL, setFilmURL] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    //const filmId = 2;
    const { filmId } = useParams();


    useEffect(() => {
        const promiseFilmTime = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies/' + filmId + '/showtimes');
        promiseFilmTime.then(response => {
            const data = response.data;

            const moviesTimes = data.days.map(item => (
                <SectionDay date={item.date} weekday={item.weekday} showtimes={item.showtimes} />
            )
            );
            setFilmsTimeArray(moviesTimes);
            setFilmTitle(data.title);
            setFilmURL(data.posterURL);
        });
    }, []);

    return (
        <div className='bodyContainer'>
            <div className='text'>Selecione o Horário</div>
            <div className="SectionsContainer">
                {filmsTimeArray}
            </div>
            <div className='footer'>
                <div className='footerCard'>
                    <img src={filmURL} />
                </div>
                <div className='footerText'>{filmTitle}</div>
            </div>
        </div>
    );
}


function SectionDay({ date, weekday, showtimes }) {
    const [showTime, setShowTime] = useState([]);

    useEffect(() => {
        const showTimeTemp = showtimes ? showtimes.map(item => (
            <Link to={`/seats/${item.id}`} className='customLink'>
                <div className="Time" key={item.id}>
                    {item.name}
                </div>
            </Link>
        )
        ) : null;
        setShowTime(showTimeTemp);
    }, []);

    return (
        <div className="SectionDayContainer">
            <div>{weekday} - {date}</div>
            <div className="TimeContainer">
                {showTime}
            </div>
        </div>
    );
}