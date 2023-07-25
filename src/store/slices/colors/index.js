// slice son capas o partes del estado
import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";
export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    list: [],
  },
  reducers: {
    setColors: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { setColors } = colorSlice.actions;
export default colorSlice.reducer;

export const fetchColors = () => async (dispatch) => {
  await fetch("https://reqres.in/api/unknown?per_page=12")
    .then((response) => dispatch(setColors(response.json().data.data)))
    .catch((error) => console.log(error), dispatch(setColors(data.data)));
};
