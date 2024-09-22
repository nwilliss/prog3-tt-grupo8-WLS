 import React, {Component } from "react"
 import MovieCard from "../components/MovieCard/MovieCard"
 //css


 class Favoritos extends Component { 
  constructor(){
    super()
    this.state = {
      pelis : []
    }
  }

  componentDidMount(){
      let favoritos  = []
      let storage = localStorage.getItem("favoritos")

      if(storage !== null){
        favoritos = JSON.parse(storage)
        let peliculas = []

        favoritos.forEach(unId => {
          fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=c8a7b4c53789e8169ffd16fbbfe4254f`)
          .then(res => res.json())
          .then(data =>{
            peliculas.push(data)
            this.setState({
              pelis: peliculas
            })
          }) .catch (error  => console.log(error))
        })



      }
  }
   render(){
    return(
      <>
      <h3>Estas son tus  peliculas favoritas</h3>
        <section> 
          {
            this.state.pelis.map((unaPelicula, idx) => <MovieCard key={unaPelicula.name + idx} datosPelis ={unaPelicula} />)
          }
       </section>
      </>
    )
   }
 }
export default Favoritos 
 
