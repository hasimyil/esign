import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authActions'

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
  reducers: {},
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
  },
})

export default authSlice.reducer