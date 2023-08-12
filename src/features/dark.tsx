import { useColorMode } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
  name: "isDark",
  initialState: { value: "dark" },
  reducers: {
    toggleDark: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { toggleDark } = darkSlice.actions;

export default darkSlice.reducer;