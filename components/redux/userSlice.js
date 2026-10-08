import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    userName: "Ankita",
  },

  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
    clearName: () => {
      state.userName = "";
    },
  },
});

export const { updateName, clearName } = userSlice.actions;

export default userSlice.reducer;
