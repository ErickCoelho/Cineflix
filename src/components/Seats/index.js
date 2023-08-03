import './style.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useParams, useNavigate } from 'react-router-dom';
import Success from '../Success';

export default function Seats() {

    const [seatsArray, setSeatsArray] = useState([]);
    const [filmURL, setFilmURL] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const [filmDate, setFilmDate] = useState("");
    //const sectionId = 17;
    const { sectionId } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatsName, setSelectedSeatsName] = useState([]);
    const navigate = useNavigate();

    const infos = {
        ids: selectedSeats.map(item => (
            parseInt(item)
        )),
        name: "",
        cpf: ""
    };

    const handleSeatClick = (itemId, itemName, itemIsAvailable) => {
        if (itemIsAvailable) {
            if (selectedSeats.includes(itemId)) {
                // Remove o assento do array de assentos selecionados
                setSelectedSeats(selectedSeats.filter(seat => seat !== itemId));
                setSelectedSeatsName(selectedSeatsName.filter(seat => seat !== itemName));
                console.log("remove " + itemName);
            } else {
                // Adiciona o assento ao array de assentos selecionados
                setSelectedSeats([...selectedSeats, itemId]);
                setSelectedSeatsName([...selectedSeatsName, itemName]);
                console.log("add " + itemName);
            }
            console.log(selectedSeats);
        }
        else
            alert(`O assento ${itemName} está indisponível!`);
    };



    const reservarAssentos = () => {
        console.log(infos);

        if(infos.name !== "" && infos.cpf !== ""){
            axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", infos)
            .then(response => {
                alert("Sucesso na reserva!");
                console.log(infos);
                navigate("/success", {state: { infos, selectedSeatsName, filmTitle, filmDate } });
            })
            .catch(error => {alert("Ocorreu um erro na reserva!")});

            /*setSeatsArray([]);
            infos.name = "";
            infos.cpf = "";*/
        }
        else{
            alert("Preencha os campos Nome e CPF!");
        }
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
                        className={`seat select ${item.isAvailable ? '' : 'unavailable'} ${selectedSeats.includes(item.id) ? 'selected' : ''}`}
                        key={item.id}
                        onClick={() => handleSeatClick(item.id, item.name, item.isAvailable)}
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
                    onChange={(event) => infos.name = event.target.value}
                ></input>

                <div htmlFor="cpfInput">CPF do comprador:</div>
                <InputMask
                    id="cpfInput"
                    mask="999.999.999-99"
                    maskChar="_"
                    placeholder="Digite seu CPF..."
                    onChange={(event) => infos.cpf = event.target.value.replace(/\D/g, '')}
                />
            </div>

            <button onClick={() => reservarAssentos()}>Reservar assento(s)</button>


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