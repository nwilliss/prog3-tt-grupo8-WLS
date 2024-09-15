import React, { Component } from "react";

class Detalle extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: Number(props.match.params.id),
            generos: [],
            pelicula: {}
        }
    }

    componentDidMount(){
   fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c8a7b4c53789e8169ffd16fbbfe4254f`)  
   .then(res=>res.json())
   .then(data => this.setState(
    {
        pelicula: data,
        generos: data.genres
    }
   )) //catch(error)
    }

render(){
    return (
        <div >
            <section className="peliDetalle">
            <h1>{this.state.pelicula.title}</h1>
            <div >
            <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt="Cartel de películas populares" />
            </div>
            <h4>Calificacion:{this.state.pelicula.popularity}</h4>
            <h4>Fecha de estreno:{this.state.pelicula.release_date}</h4>
            <h4>Duracion de la pelicula:{this.state.pelicula.runtime}</h4>
            <ul>
                { this.state.generos.map((Genero, idx)=> <li key={Genero.name + idx}>{Genero.name}</li>)}
            </ul>
            </section>
        </div>
    )
}

}

export default Detalle