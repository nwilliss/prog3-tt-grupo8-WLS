import React from 'react'
import {Component} from 'react'
import MovieCard from '../components/MovieCard/MovieCard'


 class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas : [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
       
        let query  = this.props.location.state.query
        let urlConQuery = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c8a7b4c53789e8169ffd16fbbfe4254f&include_adult=false&language=en-US&page=1`
        fetch(urlConQuery)
        .then(response=> response.json() 
        .then(data =>{
            this.setState({ peliculas: data.results})
        } )) 
        this.setState({
            isLoading: false
        })
    }

    render() {
        return ( 
            <>
            <div>{!this.state.isLoading ?<h3 className="">Resultado de busqueda de: {this.props.location.state.query} </h3> : <p>Loading...</p>}</div>
                {/* no sabemos si tenemos q importar el formulario searchform.js */}
                <section>
            {
                this.state.peliculas.length !== 0 ?
                this.state.peliculas.map((unaPelicula, idx)=> <MovieCard key={unaPelicula.title + idx} datosPelis ={unaPelicula}/>)
                :
                <h3>No se encontraron resultados</h3>
            } 
                </section>
            </>
            )
    }
}

export default SearchResults; 

