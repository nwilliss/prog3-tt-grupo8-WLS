import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from './pages/Favoritos';
import Detalle from './pages/Detalle'






function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home} />
        <Route path="/favoritos" exact component={Favoritos} />
        <Route path="/peliculas/detalle/id/:id" exact component= {Detalle}/> 
      </Switch>
      <Footer />
    </>
  );
}

export default App;
