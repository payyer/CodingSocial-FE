import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IAccess {
  accessToken: string | null;
  refreshToken: string | null;
}

// Define the initial state using that type
const initialState: IAccess = {
  accessToken: null,
  refreshToken: null,
};

export const accessSlice = createSlice({
  name: "access",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    saveRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { saveAccessToken, saveRefreshToken } = accessSlice.actions;

const accessReducer = accessSlice.reducer;

export default accessReducer;
