import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userRegister } from './authActions'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  isLoggedIn:false,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
      state.isLoggedIn=false
      state.success = false 
    },
    resetError :(state)=>{
      state.error = null
    }
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload.currentUser
        state.userToken = payload.access_token
        state.isLoggedIn= true;
      },
      [userLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
      [userRegister.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userRegister.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true // registration successful
      },
      [userRegister.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
  },
})
export const { logout, resetError } = authSlice.actions
export default authSlice.reducer