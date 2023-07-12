import './style.css';
import { useEffect, useState } from "react";

export default function Sections(){

    const [filmsTimeArray, setFilmsTimeArray] = useState([]);
    

    useEffect(() => {
        const data = {"id":1,"title":"Zack Snyder Justice League","posterURL":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg","overview":"Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.","releaseDate":"2021-03-18T00:00:00.000Z","days":[{"id":24022022,"weekday":"Quinta-feira","date":"24/02/2022","showtimes":[{"name":"15:00","id":1},{"name":"19:00","id":2}]},{"id":25022022,"weekday":"Sexta-feira","date":"25/02/2022","showtimes":[{"name":"15:00","id":3},{"name":"19:00","id":4}]},{"id":26022022,"weekday":"Sábado","date":"26/02/2022","showtimes":[{"name":"15:00","id":5},{"name":"19:00","id":6}]},{"id":27022022,"weekday":"Domingo","date":"27/02/2022","showtimes":[{"name":"15:00","id":7},{"name":"19:00","id":8}]},{"id":28022022,"weekday":"Segunda-feira","date":"28/02/2022","showtimes":[{"name":"15:00","id":9},{"name":"19:00","id":10}]},{"id":1032022,"weekday":"Terça-feira","date":"01/03/2022","showtimes":[{"name":"15:00","id":11},{"name":"19:00","id":12}]},{"id":2032022,"weekday":"Quarta-feira","date":"02/03/2022","showtimes":[{"name":"15:00","id":13},{"name":"19:00","id":14}]},{"id":3032022,"weekday":"Quinta-feira","date":"03/03/2022","showtimes":[{"name":"15:00","id":15},{"name":"19:00","id":16}]},{"id":24102021,"weekday":"Domingo","date":"24/10/2021","showtimes":[{"name":"15:00","id":321},{"name":"19:00","id":322}]},{"id":25102021,"weekday":"Segunda-feira","date":"25/10/2021","showtimes":[{"name":"15:00","id":323},{"name":"19:00","id":324}]},{"id":26102021,"weekday":"Terça-feira","date":"26/10/2021","showtimes":[{"name":"15:00","id":325},{"name":"19:00","id":326}]},{"id":27102021,"weekday":"Quarta-feira","date":"27/10/2021","showtimes":[{"name":"15:00","id":327},{"name":"19:00","id":328}]},{"id":28102021,"weekday":"Quinta-feira","date":"28/10/2021","showtimes":[{"name":"15:00","id":329},{"name":"19:00","id":330}]},{"id":29102021,"weekday":"Sexta-feira","date":"29/10/2021","showtimes":[{"name":"15:00","id":331},{"name":"19:00","id":332}]},{"id":30102021,"weekday":"Sábado","date":"30/10/2021","showtimes":[{"name":"15:00","id":333},{"name":"19:00","id":334}]},{"id":31102021,"weekday":"Domingo","date":"31/10/2021","showtimes":[{"name":"15:00","id":335},{"name":"19:00","id":336}]}]};

        const moviesTimes = data.days.map(item => {

                console.log("\n"+ item.date + " - " + item.weekday );
                item.showtimes.forEach(element => {
                    console.log(element.name);
                });
            }
        );
        setFilmsTimeArray(moviesTimes);

    }, []);


    return(
        <div className='bodyContainer'>
            <div className='text'>Selecione o Horário</div>
            <div className="SectionsContainer">
                <SectionDay date = '23/06/2023' weekday= 'quinta'/>
                <SectionDay />
                <SectionDay />
                <SectionDay />
                <SectionDay />
                <SectionDay />
            </div>
            <div className='footer'>
                <div className='footerCard'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg'></img>
                </div>
                <div className='footerText'>Enola Homes</div>
            </div>
        </div>
    );
}


function SectionDay({date, weekday, showtimes}){

    return(
        <div className="SectionDayContainer">
            <div>{weekday} - {date}</div>
            <div className="TimeContainer">
                <div className="Time">16:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
                <div className="Time">18:00</div>
            </div>
        </div>
    );
}