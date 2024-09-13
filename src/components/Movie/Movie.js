import React, { Component } from "react";
import { Link } from "react-router-dom"
//css
//Aca tenemos que poner dos cards para pelis populares y otra para pelis en cartel
import MovieCardPopulares from "../MovieCardPopulares/MovieCardPopulares";


let urlPelisPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=c8a7b4c53789e8169ffd16fbbfe4254f&language=en-US&page=1"
let urlPelisTop= "https://api.themoviedb.org/3/movie/top_rated?api_key=c8a7b4c53789e8169ffd16fbbfe4254f"

class Movies extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares: [],
            peliculasTopRated: []
        }
    }

//Vamos a buscar la informacion de la API y la traemos con Fetch

componentDidMount() {
    //Ir a buscar la informacion de peliculas populares
fetch(urlPelisPopulares)
.then(res => res.json())
.then(data => this.setState({
    peliculasPopulares: data.results
})).catch()

    //Ir a buscar la informacion de top rated
    fetch(urlPelisTop)
    .then(res => res.json())
    .then(data => this.setState({
        peliculasTopRated: data.results
    })).catch()

}

render(){
    return (
        <>
       <h1>Peliculas Populares</h1>
       <section>
        { 
            this.state.peliculasPopulares.map((oneMovie,idx) => <MovieCardPopulares key={oneMovie.name + idx} datosPelisPop={oneMovie} /> )
        }
       <Link to="/peliculas/populares" className='ver-todas'>Ver todas las películas populares</Link>
       </section>

       
       <h1>Peliculas Top</h1>
       <section>
        {
            this.state.peliculasTopRated.map((oneMovieTop,idx) => <MovieCardTop key={oneMovieTop.name + idx} datosPelisTop={oneMovieTop} /> )
        }
       <Link to="/peliculas/populares" className='ver-todas'>Ver todas las películas populares</Link>
       </section>
       </>

    )
}}

export default Movies; 

