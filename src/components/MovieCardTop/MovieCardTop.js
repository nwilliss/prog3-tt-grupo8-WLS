import React, {Component} from "react";
import "./MovieCard.css"
import { Link } from "react-router-dom";

class MovieCardTop extends Component {
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
        <article>
            <h2>{this.props.datosPelisTop.title}</h2>
            <Link to={`/peliculas/detalle/id/${this.props.datosPelisTop.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelisTop.poster_path}`} alt="Cartel de películas populares" />
            </Link>
            <div class="DescripcionCard">
            <p onClick={()=> this.mostrarDescripcion()} className="Descripcion">{this.state.textoQueSeMuestra}</p>
            <p className={this.state.descripcionDeClase}>{this.props.datosPelisTop.overview}</p>
            
            <Link to={`/peliculas/detalle/id/${this.props.datosPelisTop.id}`}>
                <button>Ir al detalle</button>
            </Link>
            </div>
        </article>
    )
}


}

export default MovieCardTop