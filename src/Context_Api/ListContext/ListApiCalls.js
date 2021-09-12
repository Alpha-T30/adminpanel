import axios from "axios";
import {
  listStart,
  listFailure,
  listSuccess,
  listdeleteStart,
  listdeleteFailure,
  listdeleteSuccess,
  listcreateStart,
  listcreateSuccess,
  listcreateFailure,
  listupdateStart,
  listupdateFailure,
  listupdateSuccess,
} from "./ListAction";

//get lists

export const getlists = async (dispatch) => {
  dispatch(listStart);
  try {
    const res = await axios.get("/list", {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(listSuccess(res.data));
  } catch (error) {
    dispatch(listFailure);
  }
};

//delete list

export const deletelist = async (dispatch, id) => {
  dispatch(listdeleteStart);
  try {
    await axios.delete("/list/" + id, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(listdeleteSuccess(id));
  } catch (error) {
    dispatch(listdeleteFailure);
  }
};

// list create
export const createlist = async (dispatch, list) => {
  dispatch(listcreateStart());
  try {
    const res = await axios.post("/list/", list, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(listcreateSuccess(res.data));
  } catch (error) {
    dispatch(listcreateFailure());
  }
};

// list update

export const listUpdate = async (dispatch, list) => {
  dispatch(listupdateStart());
  try {
    const res = await axios.patch(`/list/${list._id}`, list, {
      headers: {
        token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(listupdateSuccess(res.data));
  } catch (error) {
    dispatch(listupdateFailure());
  }
};
