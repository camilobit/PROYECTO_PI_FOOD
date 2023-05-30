import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import Detail from './components/Details/Details';
import FormCreation from './components/FormCreation/FormCreation'
import About from './components/About/About';
// import Loader2 from './components/Loaders/Loader2'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= '/' component={LandingPage}/>
          <Route path= '/home' component={Home}/>
          <Route path= '/detail/:id' component={Detail} />
          <Route path= '/recipe' component={FormCreation} />
          <Route path= '/about' component={About} />
          {/* esta ruta esta diseñada unicamente para visualizar los loaders ya que estan diseñados como componentes independientes, puedes descomentar y probar otro loader diferentes */}
          {/* <Route path= '/init' component={Loader2}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
