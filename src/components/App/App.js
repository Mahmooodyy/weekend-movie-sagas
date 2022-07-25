import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList';

// Material-UI
import { Grid } from '@material-ui/core';

function App() {

  return (
    <Grid>
      <Grid item>        
        <Router>        
          <Route path="/" exact>
            <MovieList />
          </Route>
          
          {/* Details page */}
          <Route path="/details/:id">
            <MovieDetails />
          </Route>
        </Router>
      </Grid>
    </Grid>
  );
}


export default App;
