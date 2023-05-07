import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    titulo: "tareas 1",
    description: "Descripcion tarea 1",
    completado: false,
  },
  {
    id: "2",
    titulo: "tareas 2",
    description: "Descripcion tarea 2",
    completado: false,
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      // [...state, action.payload];
      // console.log(state, action);
    },
    deleteTask: (state, action) => {
      const taskDelete = state.find((el) => el.id === action.payload);
      if (taskDelete) {
        state.splice(state.indexOf(taskDelete), 1);
      }
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
