import React, {Component} from "react";
import "./MovieCardP.css"
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showExtra: false, 
            esFavorito: false, 
        }
    }

    componentDidMount(){
     const storage = localStorage.getItem('favoritos')
     if (storage !== null) {
        const parsedArray= JSON.parse(storage)
        const estaEnFavoritos =  parsedArray.includes(this.props.movie.id)
        this.setState({
            esFavorito : estaEnFavoritos 
        })

     }
    }

verDescripcion(){
    this.setState({
        showExtra: !this.state.showExtra
    })
}


agregarFavorito(){
const storage = localStorage.getItem('favoritos')
if (storage !== null){
    const parsedArray= JSON.parse(storage)
    parsedArray.push(this.props.movie.id)
    const stringArray = JSON.stringify(parsedArray)
    localStorage.setItem('favoritos',  stringArray)


}else{
    const primerMovie = [this.props.movie.id]
    const stringArray = JSON.stringify(primerMovie)
    localStorage.setItem('favoritos',  stringArray)
}

    this.setState({
        esFavorito: true 
    })
}

sacarFavorito(){
const storage = localStorage.getItem('favoritos')
const parsedArray= JSON.parse(storage)
const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
const stringArray = JSON.stringify(favoritosRestantes)
localStorage.setItem('favoritos',  stringArray)


    this.setState({
     esFavorito: false 
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

            <div> 
            <Link to="/favoritos">

            <button onClick={this.handleClick} className="favoritoBoton">
              {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
              
            </button>
            </Link>
            </div> 

        </article>
    )
}


}

export default MovieCard