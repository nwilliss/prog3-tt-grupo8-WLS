import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import MovieGrid from "../components/MovieGrid/MovieGrid"

const Home = () => {
  return (
    <>
   
    {/* <h1 >Home</h1> */}
    <main>
     <SearchForm />
     <MovieGrid link={"/verTodas"} nombrePeli={"Las peliculas populares"} url={"https://api.themoviedb.org/3/movie/popular?api_key=c8a7b4c53789e8169ffd16fbbfe4254f&language=en-US&page=1"} />
     <MovieGrid link={"/verTodas"} nombrePeli={"Las peliculas top"} url={"https://api.themoviedb.org/3/movie/top_rated?api_key=c8a7b4c53789e8169ffd16fbbfe4254f"} />
  
    </main>

  </>
  )
}

export default Home
