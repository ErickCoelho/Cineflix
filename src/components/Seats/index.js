import './style.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import InputMask from 'react-input-mask';

export default function Seats(){

    const [seatsArray, setSeatsArray] = useState([]);
    const [filmURL, setFilmURL] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const sectionId = 17;


    useEffect(() => {
        const promiseFilmTime = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/showtimes/' + sectionId + '/seats');
        promiseFilmTime.then(response => {
            const data = response.data;
            //data = response.data;
            console.log(data);
    
            const seatsArrayTemp = data.seats
                .filter(item => item.id > 16000)
                .map(item => (
                    <div className={item.isAvailable ? 'seat':'seat unavailable'}>{item.name}</div>
                ));

            setSeatsArray(seatsArrayTemp);

            setFilmTitle(data.movie.title);
            setFilmURL(data.movie.posterURL);
        });
        
    }, []);

    return(
        <div className='bodyContainer'>
            <div className='text'>Selecione o(s) assento(s)</div>


            <div className="SeatsContainer">
                {seatsArray}
            </div>


            <div className='seatCategoryContainer'>
                <div className='seatCategory'>
                    <div className='seat selected'></div>
                    <div className='seatText'>Selecionado</div>
                </div>
                <div className='seatCategory'>
                    <div className='seat'></div>
                    <div className='seatText'>Disponível</div>
                </div>
                <div className='seatCategory'>
                    <div className='seat unavailable'></div>
                    <div className='seatText'>Indisponível</div>
                </div>
            </div>


            <div className='fieldsContainer'>
                <div>Nome do comprador:</div>
                <input></input>

                <div htmlFor="cpfInput">CPF do comprador:</div>
                <InputMask
                    id="cpfInput"
                    mask="999.999.999-99"
                    maskChar="_"
                    placeholder="___.___.___-__"
                />
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


function SectionDay({date, weekday, showtimes}){
    const [showTime, setShowTime] = useState([]);
    
    useEffect(() => {
        const showTimeTemp = showtimes ? showtimes.map(item => (
                <div className="Time">{item.name}</div>
            )
        ) : null;
        setShowTime(showTimeTemp);
        console.log(showTime);
    }, []);

    return(
        <div className="SectionDayContainer">
            <div>{weekday} - {date}</div>
            <div className="TimeContainer">
                {showTime}
            </div>
        </div>
    );
}