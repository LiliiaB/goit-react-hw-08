import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
import { toast } from "react-toastify";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      toast.success("Registration success");
    },
    [register.pending](state, action) {
      state.isAuthLoading = true;
    },
    [register.rejected](state, action) {
      state.isAuthLoading = false;
      state.error = action.payload;
      toast.error("Some error");
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      toast.success("Login successfull");
    },
    [logIn.pending](state, action) {
      state.isAuthLoading = true;
    },
    [logIn.rejected](state, action) {
      state.isAuthLoading = false;
      state.error = action.payload;
      toast.error("Login error");
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthLoading = false;
      toast.success("You have successfully logged out!");
    },
    [logOut.pending](state, action) {
      state.isAuthLoading = true;
    },
    [logOut.rejected](state, action) {
      state.isAuthLoading = false;
      state.error = action.payload;
      toast.error("Some error");
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isAuthLoading = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isAuthLoading = false;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
      state.isAuthLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
