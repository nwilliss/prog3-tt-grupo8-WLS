import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import Movie from "../components/Movie/Movie"

const Home = () => {
  return (
    <>
   
    <h1 >Home</h1>
    <main>
     <SearchForm />
     <Movie/>

    </main>

  </>
  )
}

export default Home
