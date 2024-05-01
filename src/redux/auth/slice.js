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
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
        toast.success("Registration success");
      })
      .addCase(register.pending, (state, action) => {
        state.isAuthLoading = true;
      })

      .addCase(register.rejected, (state, action) => {
        state.isAuthLoading = false;
        state.error = action.payload;
        toast.error("Some error");
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
        toast.success("Login successfull");
      })

      .addCase(logIn.pending, (state, action) => {
        state.isAuthLoading = true;
      })

      .addCase(logIn.rejected, (state, action) => {
        state.isAuthLoading = false;
        state.error = action.payload;
        toast.error("Login error");
      })

      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isAuthLoading = false;
        toast.success("You have successfully logged out!");
      })

      .addCase(logOut.pending, (state, action) => {
        state.isAuthLoading = true;
      })

      .addCase(logOut.rejected, (state, action) => {
        state.isAuthLoading = false;
        state.error = action.payload;
        toast.error("Some error");
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isAuthLoading = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthLoading = false;
      })

      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
        state.isAuthLoading = false;
      }),
});

export const authReducer = authSlice.reducer;
