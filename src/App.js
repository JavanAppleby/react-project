import './App.css';
import { Route, Switch } from 'react-router-dom';
import FrontCover from './pages/FrontCover';
import About from './pages/About'
import Superheroes from './pages/Superheroes';
import SuperShow from './components/SuperShow';
import { SuperheroContextProvider } from './contexts/SuperheroContext';

function App() {
  return (
    <div className='App'>
      <SuperheroContextProvider>
        <Switch>
          <Route path='/' exact component={FrontCover} />
          <Route path='/' exact component={About} />
          <Route path='/' exact component={Superheroes} />
          <Route path='/' exact component={SuperShow} />
        </Switch>
      </SuperheroContextProvider>
    </div>
  );
}

export default App;