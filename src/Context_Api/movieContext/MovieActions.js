export const movieStart = () => ({ type: "movie_start" });
export const movieSuccess = (movies) => ({ type: "movie_success", payload:movies });
export const movieFailure = () => ({ type: "movie_failure" });


export const moviedeleteStart = () => ({ type: "movie_delete_start" });
export const moviedeleteSuccess = (id) => ({ type: "movie_delete_success", payload:id });
export const moviedeleteFailure = () => ({ type: "movie_delete_failure" });


export const moviecreateStart = () => ({ type: "movie_create_start" });
export const moviecreateSuccess = (movie) => ({ type: "movie_create_success", payload:movie});
export const moviecreateFailure = () => ({ type: "movie_create_failure" });

export const movieupdateStart = () => ({ type: "movie_update_start" });
export const movieupdateSuccess = (movie) => ({ type: "movie_update_success", payload:movie});
export const movieupdateFailure = () => ({ type: "movie_update_failure" });