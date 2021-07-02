import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import peopleReducer from "./people";

export default configureStore({
  reducer: {
    counter: counterReducer,
    people: peopleReducer,
  },
});
