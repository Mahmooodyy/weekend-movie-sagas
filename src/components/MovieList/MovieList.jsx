import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

// Material-Ui
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

// Material-Ui Styles
const useStyles = makeStyles((theme) => ({

  movieCard: {
    height: 350,
    background: "black",
    color: "white",
  },
  media: {
    height: 200,
    paddingTop: "50%",
  },
  movieListTitle: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  listWrapper: {
    padding: "1.5rem",
  },
}));

function MovieList() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const handlePosterClick = (movieId) => {
    history.push(`/details/${movieId}`);
  }; // end handlePosterClick

  return (
    <Grid container direction="column" className={classes.root} spacing={2}>

      <Grid item xs={12}>
        <Grid justifyContent="center" align="center" container>
          {/* Title */}
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h2"
              className={classes.movieListTitle}
            >
              Movie List
            </Typography>
            <Typography align="center" variant="h6">
              Click on a movie poster to view details
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Rendered List of Movies */}
      <Grid item xs={12}>
        <Paper elevation={5} className={classes.listWrapper}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-evenly"
            spacing={4}
          >

            {movies.map((movie) => {
              return (
                <Grid
                  item
                  key={movie.id}
                  xs={3}
                  onClick={() => handlePosterClick(movie.id)}
                >
                  <Card className={classes.movieCard}>
                    {/* Title */}
                    <CardHeader title={movie.title} />

                    {/* Movie Poster */}
                    <CardMedia
                      className={classes.media}
                      image={movie.poster}
                      title={movie.title}
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default MovieList;
