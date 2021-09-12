import { LocalActivityTwoTone } from "@material-ui/icons";

const ListReducer = (state, action) => {
  switch (action.type) {
    case "list_start":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case "list_success":
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };
    case "list_failure":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };

    case "list_delete_start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "list_delete_success":
      return {
        lists: state.lists.filter((m) => m._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "list_delete_failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "list_create_start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "list_create_success":
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };
    case "list_create_failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "list_update_start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "list_update_success":
      return {
        lists: state.lists.map((m)=>m._id===action.payload._id?action.payload:m) , 
        isFetching: false,
        error: false,
      };
    case "list_update_failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default ListReducer;
