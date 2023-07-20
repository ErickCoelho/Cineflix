import './style.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useParams } from 'react-router-dom';

export default function Seats(){

    const [seatsArray, setSeatsArray] = useState([]);
    const [filmURL, setFilmURL] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const [filmDate, setFilmDate] = useState("");
    //const sectionId = 17;
    const { sectionId } = useParams();


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
            setFilmDate(data.day.weekday + " - " + data.day.date);
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
                <input
                    type='text'
                    id='name'
                    placeholder='Digite seu nome...'
                ></input>

                <div htmlFor="cpfInput">CPF do comprador:</div>
                <InputMask
                    id="cpfInput"
                    mask="999.999.999-99"
                    maskChar="_"
                    placeholder="Digite seu CPF..."
                />
            </div>

            <button>Reservar assento(s)</button>


            <div className='footer'>
                <div className='footerCard'>
                    <img src={filmURL} />
                </div>
                <div className='footerTextContainer'>
                    <div className='footerText'>{filmTitle}</div>
                    <div className='footerText'>{filmDate}</div>
                </div>
            </div>
        </div>
    );
}