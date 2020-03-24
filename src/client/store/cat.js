import axios from "axios";

// ACTION TYPES
// YOU MAKE THEM!!

// INITIAL STATE
const initialState = {};

// ACTION CREATORS
export const loadCat = data => ({
  type: "LOAD_CAT",
  cat: data

  // what kinda stuff goes in here?
});

// THUNK CREATORS
export const fetchCat = (id, action) => async dispatch => {
  console.log();
  const cat = (await axios.get(`/api/cats/${id}/`)).data;

  return dispatch(loadCat(cat));

  // return await dispatch({ type: "LOAD_CAT" });
  // YOUR CODE HERE
};

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
const LOAD_CAT = "LOAD_CAT";
export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CAT:
      return action.cat;

    default:
      return state;
  }
}
