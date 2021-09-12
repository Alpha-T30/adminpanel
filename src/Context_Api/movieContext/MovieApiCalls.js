import axios from "axios";
import {
  movieStart,
  movieFailure,
  movieSuccess,
  moviedeleteStart,
  moviedeleteFailure,
  moviedeleteSuccess,
  moviecreateStart,
  moviecreateSuccess,
  moviecreateFailure,
  movieupdateStart,
  movieupdateFailure,
  movieupdateSuccess,
} from "./MovieActions";

//get movies

export const getMovies = async (dispatch) => {
  dispatch(movieStart);
  try {
    const res = await axios.get("/movie", {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(movieSuccess(res.data));
  } catch (error) {
    dispatch(movieFailure);
  }
};

//delete movie

export const deleteMovie = async (dispatch, id) => {
  dispatch(moviedeleteStart);
  try {
    await axios.delete("/movie/" + id, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(moviedeleteSuccess(id));
  } catch (error) {
    dispatch(moviedeleteFailure);
  }
};

// movie create
export const createMovie = async (dispatch, movie) => {
  dispatch(moviecreateStart);
  try {
    const res = await axios.post("/movie/", movie, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(moviecreateSuccess(res.data));
  } catch (error) {
    dispatch(moviecreateFailure);
  }
};

// movie update

export const movieUpdate = async (dispatch, movie) => {
  dispatch(movieupdateStart());
  try {
    const res = await axios.patch(`/movie/${movie._id}`, movie, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(movieupdateSuccess(res.data));
  } catch (error) {
    dispatch(movieupdateFailure());
  }
};
