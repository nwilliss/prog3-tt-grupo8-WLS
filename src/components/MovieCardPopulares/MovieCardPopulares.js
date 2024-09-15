import React, {Component} from "react";
import "./MovieCardP.css"
import { Link } from "react-router-dom";

class MovieCardPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descripcionDeClase: "Ocultar",
            textoQueSeMuestra: "Ver descripcion"
        }
    }

//Funcionalidad de mostrar y ocultar la descripcion//
mostrarDescripcion(){
    if (this.state.descripcionDeClase === "Ocultar"){
        this.setState({
            descripcionDeClase: "Mostrar" ,
            textoQueSeMuestra: "Ocultar la descripcion"
        }) } else {
            this.setState({
                descripcionDeClase: "Ocultar",
                textoQueSeMuestra: "Ver la descripcion"
            })
        }
    }



render(){
    return (
        <article className="cardpelicula">
            <h2>{this.props.datosPelisPop.title}</h2>
            <Link to={`/peliculas/detalle/id/${this.props.datosPelisPop.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelisPop.poster_path}`} alt="Cartel de películas populares" />
            </Link>
            <div class="DescripcionCard">
            <p onClick={()=> this.mostrarDescripcion()} className="Descripción">{this.state.textoQueSeMuestra}</p>
            <p className={this.state.descripcionDeClase}>{this.props.datosPelisPop.overview}</p>
            
            <Link to={`/peliculas/detalle/id/${this.props.datosPelisPop.id}`}>
                <button>Ir al detalle</button>
            </Link>
            </div>
        </article>
    )
}


}

export default MovieCardPopulares