import './style.css';

export default function Sections() {


    const filmTitle = "Enola Holmes";
    const filmDate = "23/06/2022";
    const fimlHour = "15:00";
    const filmSeats = [1, 2, 3];
    const name = "Marcelo Dias Santos"
    const cpf = "000.000.000-00";

    const filmSeatsArray = filmSeats.map(element => (
        <div>Assento {element}</div>
    ));


    return (
        <div className='bodyContainer'>
            <div className='text'>Pedido feito com sucesso!</div>

            <div className='infoContainer'>
                <div className='title'>Filme e Seção</div>
                <div className='description'>{filmTitle}</div>
                <div>{filmDate} {fimlHour}</div>
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

            <button>Voltar pra Home</button>
        </div>
    );
}