import React from 'react'
import { Component } from 'react'
import "../index.css"

import MovieCard from '../components/MovieCard/MovieCard'

class PeliculasPop extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculas:[], 
        }
    }


    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c8a7b4c53789e8169ffd16fbbfe4254f&language=en-US&page=1")
        .then((res)=> res.json() )
        .then((data)=> this.setState({peliculas:data.results}))
        //catch
    }

    render(){

        return(
            <>
            <section className='peliFav'>
            {this.state.peliculas.map((oneMovie, idx) => <MovieCard key={oneMovie.name + idx} datosPelis={oneMovie} />)}
            </section>

            </>


        
     )

    }
}

export default PeliculasPop
