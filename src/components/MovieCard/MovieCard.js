import React, {Component} from "react";
import "./MovieCardP.css"
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showExtra: false, 
        }
    }


verDescripcion(){
    this.setState({
        showExtra: !this.state.showExtra
    })
}

render(){
    return (
        <article className="cardpelicula">
            <h2>{this.props.datosPelis.title}</h2>
            <Link to={`/peliculas/detalle/id/${this.props.datosPelis.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelis.poster_path}`} alt="Cartel de películas populares" />
            </Link>
            <div class="DescripcionCard">
            <button className="botonDescripcion" onClick={()=>this.verDescripcion()}>
            {this.state.showExtra ? "Ocultar descripcion" : "Ver descripcion"}
            </button>
            {this.state.showExtra && <p>{this.props.datosPelis.overview}</p>}
            <Link to={`/peliculas/detalle/id/${this.props.datosPelis.id}`}>
                <button>Ir al detalle</button>
            </Link>
            </div>
        </article>
    )
}


}

export default MovieCard