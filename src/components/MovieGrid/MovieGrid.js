import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Movie.css";
//Aca tenemos que poner dos cards para pelis populares y otra para pelis en cartel
import MovieCard from "../MovieCard/MovieCard";


class MovieGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            urlPeliculas: "",
            isLoading: true
        }
    }

    //Vamos a buscar la informacion de la API y la traemos con Fetch

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        let urlPeliculas = this.props.url


        //Ir a buscar la informacion de peliculas dependiendo de cual llega
        fetch(urlPeliculas)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: data.results.slice(0, 5)
            }))
            .catch()
            this.setState({
                isLoading: false
            })

    }

    render() {
        return (
            <>
                <h1 className="titulo">{this.props.nombrePeli}</h1>
                <Link to={{ pathname: this.props.link, state: { urlPeliculas: this.props.url } }} > Ver todas </Link>
                {this.state.peliculas.length > 0 ? <section className="peliculas">
                    {

                        this.state.peliculas.map((oneMovie, idx) => <MovieCard key={oneMovie.name + idx} datosPelis={oneMovie} />)


                    }
                </section> : <p>Loadinng....</p>  }
                




            </>
        )
    }
}

export default MovieGrid;

