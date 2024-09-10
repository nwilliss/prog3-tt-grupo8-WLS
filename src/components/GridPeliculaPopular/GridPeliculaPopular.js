import "../GridPeliculaPopular.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import PeliculaPopular from "../PeliculaPopular/PeliculaPopular";
import { options } from "../../options";



class GridPeliculaPopular extends Component {
    constructor (props){
        super(props);
        this.state = {
            peliculasPopulares: []
        };
    }
}

componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' ,
    options)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) { 
          this.setState({ peliculasPopulares: data.results });
        } 
        else {
          console.error("No hay resultados para tu busqueda");
        }
      })
      .catch(error => console.log(error));
  }



  render() {
    const { peliculasPopulares } = this.state;

    return (
      <section className='top-container'>
        <h2 className="titulo-popular">Películas Populares</h2>
        <div className="top-card">
          {peliculasPopulares && peliculasPopulares.length > 0
            ? 
            //completar condicion 
          
            ))
            : <p>loading...</p>} 
        </div>
      </section>
    );
  }

















export default GridPeliculaPopular; 
