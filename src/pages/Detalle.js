import React, { Component } from "react";

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Number(props.match.params.id),
            generos: [],
            pelicula: {},
            favsText: "Agregar a Favoritos",
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })

        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c8a7b4c53789e8169ffd16fbbfe4254f`)
            .then(res => res.json())
            .then(data => this.setState(
                {
                    pelicula: data,
                    generos: data.genres
                }
            )) //catch(error)


        //Mismo comportamiento que hicimos en moviecard lo ponemos aca para la precarga despues del primer renderizado

        let favoritos = []
        const storage = localStorage.getItem('favoritos')

        if (storage !== null) {
            const favsGuardados = JSON.parse(storage)
            favoritos = favsGuardados
        }

        if (favoritos.includes(this.state.id)) {
            this.setState({
                favsText: "Quitar de Favoritos "
            })
        }

        this.setState({
            isLoading: false
        })

    }

    favoritosFunction(id) {

        let favoritos = []
        let storage = localStorage.getItem("favoritos")

        if (storage !== null) {
            let favsGuardados = JSON.parse(storage)
            favoritos = favsGuardados
        }

        if (favoritos.includes(id)) {

            favoritos = favoritos.filter(id => id !== id)
            this.setState({
                favsText: "Agregar a Favoritos"
            })
        } else {
            favoritos.push(id)
            this.setState({
                favsText: "Quitar de Favoritos"
            })
        }

        let favoritosStringify = JSON.stringify(favoritos)
        localStorage.setItem("favoritos", favoritosStringify)
        console.log(localStorage)
    }
    render() {
        return (
            <div >
                {!this.state.isLoading ? 
                    <section className="peliDetalle">
                    <h1>{this.state.pelicula.title}</h1>
                    <div >
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt="Cartel de películas populares" />
                    </div>
                    <h4>Calificacion:{this.state.pelicula.popularity}</h4>
                    <h4>Fecha de estreno:{this.state.pelicula.release_date}</h4>
                    <h4>Duracion de la pelicula:{this.state.pelicula.runtime}</h4>
                    <ul>
                        {this.state.generos.map((Genero, idx) => <li key={Genero.name + idx}>{Genero.name}</li>)}
                    </ul>
                    <button onClick={() => this.favoritosFunction(this.state.id)} className="favoritoBoton">
                        {this.state.favsText}
                    </button>

                </section>
                :
                <p>Loading...</p>}
            </div>
        )
    }

}

export default Detalle