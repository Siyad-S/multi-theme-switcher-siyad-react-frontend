import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ThemeType } from "./themeTypes";

interface ThemeState {
  currentTheme: ThemeType;
}

const initialTheme = (localStorage.getItem("theme") as ThemeType) || "theme1";

const initialState: ThemeState = {
  currentTheme: initialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
