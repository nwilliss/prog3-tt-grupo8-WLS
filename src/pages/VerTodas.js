import React, { Component } from "react"
//css
//Importamos la card
import MovieCard from "../components/MovieCard/MovieCard"
//Formulario de filtro
import Form from "../components/Form/Form"

//Cambiar a array filtrado

class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            peliculasFiltradas: [],
            paginaSiguiente: "",
            urlPeliculas: this.props.location.state.urlPeliculas
        }
    }

    componentDidMount(){
       

        fetch(this.state.urlPeliculas)
        .then (res => res.json())
        .then(data => this.setState({
            peliculas: data.results,
            peliculasFiltradas: data.results,
            paginaSiguiente: data.page
        }))
        .catch()
    }

    //Vamos a traernos informacion de la pagina siguiente //

    load(){
        let urlLoad = `${this.state.urlPeliculas.split('&page=')[0]}&page=${this.state.paginaSiguiente + 1}`;
        fetch(urlLoad)
        .then(res => res.json())
        .then( data => this.setState({
            peliculas: this.state.peliculasFiltradas.concat(data.results),
            peliculasFiltradas: this.state.peliculas.concat(data.results),
            paginaSiguiente: data.page+1
        }))
        .catch(error => console.log(error))
    }


    //Filtrar la pelicula que tengamos, este filtro esta ligado con el formulario//

    filtradoDePeliculas(Filtro){
        let pelisFiltradas = this.state.peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(Filtro.toLowerCase()) )
        this.setState({
            peliculasFiltradas : pelisFiltradas
        })
    }

    //Render//

    render(){
        return(
            <>
            <Form filtrarPelis={(Filtro)=> this.filtradoDePeliculas(Filtro)}/>

        <section>
            {
                this.state.peliculasFiltradas.map((oneMovie, idx) => <MovieCard key={oneMovie.name + idx} datosPelis={oneMovie} /> )
            }
        </section>

            <button type="button" onClick={ ()=> this.load()}>Cargar más</button>
        
        </>
        )
    }


}

export default VerTodas;
