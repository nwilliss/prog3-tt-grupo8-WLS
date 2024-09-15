import React, { Component } from "react"
//css

//Importamos la card
import MovieCardPopulares from "../components/MovieCardPopulares/MovieCardPopulares"
//Formulario de filtro
import Form from "../components/Form/Form"

//Cambiar a array filtrado

class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculasPopulares: [],
            peliculasPopulares2: [],
            paginaSiguiente: ""
        }
    }

    componentDidMount(){
        let urlPelisPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=c8a7b4c53789e8169ffd16fbbfe4254f&language=en-US&page=1"
        
        fetch(urlPelisPopulares)
        .then (res => res.json())
        .then(data => this.setState({
            peliculasPopulares: data.results,
            peliculasPopulares2: data.results,
            paginaSiguiente: data.page
        }))
        .catch()
    }

    //Vamos a traernos informacion de la pagina siguiente //

    load(){
        let urlLoad = `https://api.themoviedb.org/3/movie/popular?api_key=c8a7b4c53789e8169ffd16fbbfe4254f&language=en-US&page=${this.state.paginaSiguiente +1}`
        
        fetch(urlLoad)
        .then(res => res.json())
        .then( data => this.setState({
            peliculasPopulares: this.state.peliculasPopulares2.concat(data.results),
            peliculasPopulares2: this.state.peliculasPopulares.concat(data.results),
            paginaSiguiente: data.page+1
        }))
        .catch(error => console.log(error))
    }


    //Filtrar la pelicula que tengamos, este filtro esta ligado con el formulario//

    filtradoDePeliculas(Filtro){
        let peliculasFiltradas = this.state.peliculasPopulares.filter(pelicula => pelicula.title.toLowerCase().includes(Filtro.toLowerCase()) )
        this.setState({
            peliculasPopulares2 : peliculasFiltradas
        })
    }

    //Render//

    render(){
        return(
            <>
            <Form filtrarPelis={(Filtro)=> this.filtradoDePeliculas(Filtro)}/>

        <section>
            {
                this.state.peliculasPopulares2.map((oneMovie, idx) => <MovieCardPopulares key={oneMovie.name + idx} datosPelisPop={oneMovie} /> )
            }
        </section>

            <button type="button" onClick={ ()=> this.load()}>Cargar más</button>
        
        </>
        )
    }


}

export default VerTodas;