import './App.css';
// import About from './components/About/About.jsx';
// import Details from './components/Details/Details.jsx';
// import CreationRecipe from './components/Form/Form Creation/CreationRecipe.jsx'
// import Nav from './components/Nav/Nav.jsx';
// import Recipe from './components/Recipe/Recipe.jsx';
// import Recipes from './components/Recipes/Recipes.jsx';

import { Routes, Route, } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route to='/' component={LandingPage}/>
        <Route to='/home' component={Home}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
