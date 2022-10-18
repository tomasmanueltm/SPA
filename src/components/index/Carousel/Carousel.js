import "./Carousel.css";
import logo from "../../../logo.svg";




function Carousel()
{   
    return (
        <div className="carousel">
            <img src={logo} alt="arquivo" />

            <div className="legenda">
                <h1>Informação</h1>
                <p>paragrafo</p>

                <div className="form-search">
                    <input className="input" placeholder="Busca"></input>   
                    <svg class="svg-icon" viewBox="0 0 19.9 19.7">
                        <g class="search-path" fill="none" stroke="#777">
                            <path stroke-linecap="square" stroke-width="3" d="M18.5 18.3l-5.4-5.4"/>
                            <circle cx="8" cy="8" r="7" stroke-width="3" />
                        </g>
                    </svg>
                </div>
            </div>
        </div> 
    );
}


export default Carousel;