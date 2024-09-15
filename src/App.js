import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from './pages/Favoritos';
import Detalle from './pages/Detalle'
import VerTodas from "./pages/VerTodas";







function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home} />
        <Route path="/peliculas/populares" exact component={VerTodas} />
        <Route path="/peliculas/detalle/id/:id" component= {Detalle}/> 
        <Route path="/favoritos" exact component={Favoritos} />
    
      </Switch>
      <Footer />
    </>
  );
}

export default App;
