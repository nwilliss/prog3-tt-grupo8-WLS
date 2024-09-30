import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from './pages/Favoritos';
import Detalle from './pages/Detalle'
import VerTodas from "./pages/VerTodas";
import Error404 from "./pages/Error404";
import SearchResults from "./pages/Search";
import PeliculasPop from "./pages/PeliculasPop";
import PeliculasTop from "./pages/PeliculasTop";



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/peliculas/detalle/id/:id" component={Detalle} />
        <Route path="/search" component={SearchResults} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/verTodas" exact component={VerTodas} />
        <Route path="/peliculasTop" component={PeliculasTop} />
        <Route path="/peliculasPop" component={PeliculasPop} />
        <Route path="" component={Error404} />





      </Switch>
      <Footer />
    </>
  );
}

export default App;
