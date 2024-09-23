import React from 'react'
import { Component } from 'react'
import MovieCard from '../components/MovieCard/MovieCard'
import "../index.css"


class PeliculasTop extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculas:[], 
        }
    }


    componentDidMount(){
        
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c8a7b4c53789e8169ffd16fbbfe4254f")
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

export default PeliculasTop
