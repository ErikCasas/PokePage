import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/home/Home';
import Created from './Components/CreatedPokemon/CreatedPokemon';
import Detail from './Components/Detail/Detail';
import Message from './Components/Message/Message';
import Example from './Components/example/example';


function App() {
  return (
     <div className="App">
    <Switch>
      <Route exact path={'/pruebas'} component={Example}/>
       <Route exact path={'/'} component={LandingPage}/>
       <Route exact path={'/pokemons'} component={Home}/>
       <Route exact path={'/create'} component={Created}/>
       <Route exact path={'/pokemons/:id'} component={Detail}/>
       <Route exact path={'/not_found'} component={Message}/>
       <Redirect from='*' to={'/not_found'}/>
    </Switch>
     </div>
  );
}

export default App;
