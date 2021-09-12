const MovieReducer = (state, action) => {
  switch (action.type) {
    case "movie_start":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "movie_success":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "movie_failure":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    case "movie_delete_start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "movie_delete_success":
      return {
        movies: state.movies.filter((m) => m._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "movie_delete_failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "movie_create_start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "movie_create_success":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "movie_create_failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "movie_update_start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "movie_update_success":
      return {
        movies: state.movies.map((m)=>m._id===action.payload._id?action.payload:m) , 
        isFetching: false,
        error: false,
      };
    case "movie_update_failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default MovieReducer;
