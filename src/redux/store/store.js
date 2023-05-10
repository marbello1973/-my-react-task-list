import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducer/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
