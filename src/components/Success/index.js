import './style.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Sections() {
    const location = useLocation();
    const infos = location.state?.infos || {};


    const filmTitle = location.state?.filmTitle || "Título não especificado";
    const filmDate = location.state?.filmDate || "Data e horário não especificados";
    const filmSeats = location.state?.selectedSeatsName || [];
    const name = infos.name;
    const cpf = infos.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    const filmSeatsArray = filmSeats.map(element => (
        <div>Assento {element}</div>
    ));


    return (
        <div className='bodyContainer'>
            <div className='success text'>Pedido feito com sucesso!</div>

            <div className='infoContainer'>
                <div className='title'>Filme e Seção</div>
                <div className='description'>{filmTitle}</div>
                <div>{filmDate}</div>
            </div>

            <div className='infoContainer'>
                <div className='title'>Ingressos</div>
                <div className='description'>
                    {filmSeatsArray}
                </div>
            </div>

            <div className='infoContainer'>
                <div className='title'>Comprador</div>
                <div className='description'>Nome: {name}</div>
                <div>CPF: {cpf}</div>
            </div>

            <Link to={`/`}>
                <div className='successPageButtom'>Voltar pra Home</div>
            </Link>
        </div>
    );
}