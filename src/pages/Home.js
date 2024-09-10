import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import GridPeliculaPopular from "../components/GridPeliculaPopular/GridPeliculaPopular"


const Home = () => {
  return (
    <>
   
    <h1 >Home</h1>
    <main>
     <SearchForm />
     <GridPeliculaPopular/>

    </main>

  </>
  )
}

export default Home
