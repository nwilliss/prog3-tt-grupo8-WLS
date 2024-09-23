import React from 'react'
import { Component } from 'react'
import "../index.css"

import MovieCard from '../components/MovieCard/MovieCard'

class PeliculasPop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            isLoading: true,

        }
    }


    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c8a7b4c53789e8169ffd16fbbfe4254f&language=en-US&page=1")
            .then((res) => res.json())
            .then((data) => this.setState({ peliculas: data.results }))
        //catch
        this.setState({
            isLoading: false
        })

    }

    render() {

        return (
            <>
                <section className='peliFav'>
                    {this.state.peliculas.lenght === 0 && this.state.isLoding ?
                        <p>Loading...</p>
                        :
                        this.state.peliculas.lenght === 0 && !this.state.isLoding ?
                            <p>No hay resultados</p> :
                            this.state.peliculas.map((oneMovie, idx) => <MovieCard key={oneMovie.name + idx} datosPelis={oneMovie} />)}
                </section>

            </>




        )

    }
}

export default PeliculasPop
