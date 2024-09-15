import React, { Component } from "react"
//css

//Importamos la card
import MovieCardTop from "../components/MovieCardTop/MovieCardTop"
//Formulario de filtro
import Form from "../components/Form/Form"

//Cambiar a array filtrado

class VerTodasPelisTop extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculasTop: [],
            peliculasTop2: [],
            paginaSiguiente: ""
        }
    }

    componentDidMount(){
        let urlPelisTop= "https://api.themoviedb.org/3/movie/top_rated?api_key=c8a7b4c53789e8169ffd16fbbfe4254f"
        
        fetch(urlPelisTop)
        .then (res => res.json())
        .then(data => this.setState({
            peliculasTop: data.results,
            peliculasTop2: data.results,
            paginaSiguiente: data.page
        }))
        .catch()
    }

    //Vamos a traernos informacion de la pagina siguiente //

    load(){
        
        let urlLoad= 'https://api.themoviedb.org/3/movie/top_rated?api_key=c8a7b4c53789e8169ffd16fbbfe4254f&page=${this.state.paginaSiguiente +1}'
        
        fetch(urlLoad)
        .then(res => res.json())
        .then( data => this.setState({
            peliculasTop: this.state.peliculasTop2.concat(data.results),
            peliculasTop2: this.state.peliculasTop.concat(data.results),
            paginaSiguiente: data.page+1
        }))
        .catch(error => console.log(error))
    }


    //Filtrar la pelicula que tengamos, este filtro esta ligado con el formulario//

    filtradoDePeliculas(Filtro){
        let peliculasFiltradas = this.state.peliculasTop.filter(pelicula => pelicula.title.toLowerCase().includes(Filtro.toLowerCase()) )
        this.setState({
            peliculasTop2 : peliculasFiltradas
        })
    }

    //Render//

    render(){
        return(
            <>
            <Form filtrarPelis={(Filtro)=> this.filtradoDePeliculas(Filtro)}/>

        <section className="hola">
            {
                this.state.peliculasTop2.map((oneMovie, idx) => <MovieCardTop key={oneMovie.name + idx} datosPelisTop={oneMovie} /> )
            }
        </section>

            <button type="button" onClick={ ()=> this.load()}>Cargar más</button>
        
        </>
        )
    }


}

export default VerTodasPelisTop;