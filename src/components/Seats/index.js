import './style.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useParams } from 'react-router-dom';

export default function Seats() {

    const [seatsArray, setSeatsArray] = useState([]);
    const [filmURL, setFilmURL] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const [filmDate, setFilmDate] = useState("");
    //const sectionId = 17;
    const { sectionId } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (itemName, itemIsAvailable) => {
        if(itemIsAvailable){
            if (selectedSeats.includes(itemName)) {
                // Remove o assento do array de assentos selecionados
                setSelectedSeats(selectedSeats.filter(seat => seat !== itemName));
                console.log("remove " + itemName);
            } else {
                // Adiciona o assento ao array de assentos selecionados
                setSelectedSeats([...selectedSeats, itemName]);
                console.log("add " + itemName);
            }
            console.log(selectedSeats);
        } 
        else
            alert(`O assento ${itemName} está indisponível!`);
    };


    useEffect(() => {
        const promiseFilmTime = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/showtimes/' + sectionId + '/seats');
        promiseFilmTime.then(response => {
            const data = response.data;
            //data = response.data;
            console.log(data);

            console.log(selectedSeats);

            const seatsArrayTemp = data.seats
                .filter(item => item.id > 16000)
                .map(item => (
                    <div
                        className={`seat ${item.isAvailable ? '' : 'unavailable'} ${selectedSeats.includes(item.name) ? 'selected' : ''}`}
                        key={item.id}
                        onClick={() => handleSeatClick(item.name, item.isAvailable)}
                    >
                        {item.name}
                    </div>
                ));

            setSeatsArray(seatsArrayTemp);

            setFilmTitle(data.movie.title);
            setFilmURL(data.movie.posterURL);
            setFilmDate(data.day.weekday + " - " + data.name);
        });

    }, [selectedSeats]);

    return (
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