import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  hasError: false,
  people: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeople: (state) => {
      state.loading = true;
    },
    getPeopleFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
    getPeopleSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasError = false;
      state.people = [...state.people, payload];
    },
  },
});

//export the actions
export const { getPeople, getPeopleFailure, getPeopleSuccess } =
  peopleSlice.actions;

//export the selector
export const peopleSelector = (state) => state.people;

//reducer
export default peopleSlice.reducer;

//thunk
export function fetchPeople() {
  return async (dispatch) => {
    dispatch(getPeople());

    try {
      const res = await axios.get("https://randomuser.me/api/");

      dispatch(getPeopleSuccess(res.data.results[0]));
    } catch (error) {
      dispatch(getPeopleFailure());
    }
  };
}
