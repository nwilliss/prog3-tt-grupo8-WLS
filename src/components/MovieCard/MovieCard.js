import React, {Component} from "react";
import "./MovieCardP.css"
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showExtra: false, 
            esFavorito: false, 
            favsText : "Agregar a Favoritos"
        }
    }

    componentDidMount(){
    let favoritos = []
     const storage = localStorage.getItem('favoritos')
    
     if (storage !== null) {
        const favsGuardados= JSON.parse(storage)
       favoritos = favsGuardados
     }

     if (favoritos.includes(this.props.datosPelis.id))  {
        this.setState({
            favsText: "Quitar de Favoritos "
        })
     }

    }
favoritosFunction(id){

    let favoritos = []
    let storage = localStorage.getItem("favoritos")

    if(storage !== null){
        let favsGuardados = JSON.parse(storage)
        favoritos = favsGuardados
    }

    if(favoritos.includes(id)) {

        favoritos = favoritos.filter(id => id !== id)
            this.setState({
                favsText: "Agregar a Favoritos"
            })
    } else {
        favoritos.push(id)
        this.setState({
            favsText: "Quitar de Favoritos"
        })
    }

    let favoritosStringify = JSON.stringify(favoritos)
    localStorage.setItem("favoritos",favoritosStringify )
    console.log(localStorage)
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

            <div> 
           

            <button onClick={() => this.favoritosFunction(this.props.datosPelis.id)} className="favoritoBoton">
           {this.state.favsText}
            </button>
           
            </div> 

        </article>
    )
}


}

export default MovieCard