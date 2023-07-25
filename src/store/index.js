import { configureStore } from "@reduxjs/toolkit";
import colors from "./slices/colors";
export default configureStore({
  reducer: {
    colors,
  },
});
