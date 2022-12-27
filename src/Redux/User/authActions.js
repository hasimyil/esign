import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Config } from '@/Config'
import { getCurrentUser } from '@/Services/userService/userApi';
import accountsService from '@/Services/accounts-service';
import { generateHeaders } from '@/Services/serviceWrapper';


export const userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const  headers = { 
            'Authorization' : "Basic YnJvd3Nlcjo="
        }
        const params = {
            username:username,
            password:password,
            scope:'ui',
            grant_type:'password'
        }
        
        const data = await  accountsService.post.getToken(headers,params);
        console.log("ERRRR",data.status)
     
        const currentUserData = await accountsService.get.getCurrentUser(generateHeaders(data))
        // store user's token in local storage
        // localStorage.setItem('userToken', data.userToken)
        data.currentUser = currentUserData;

        return data
      } catch (error) {
        // return custom error message from API if any
        console.log()
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else if(error.status === 401){
          return rejectWithValue("Please check your credintials, incorrect username or password!")
        }{
          return rejectWithValue("Nework Error")
        }
      }
    }
  )


export const userRegister = createAsyncThunk(
    'user/register',
    async ({ username, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const  headers = { 
          'Content-Type' : "application/json"
      }
 
        const body = {
            username:username,
            password:password
        }
        
        const data = await  accountsService.post.register(headers,JSON.stringify(body));
        console.log("ERRRR",data)
     
       // const currentUserData = await accountsService.get.getCurrentUser(generateHeaders(data))
        // store user's token in local storage
        // localStorage.setItem('userToken', data.userToken)
       // data.currentUser = currentUserData;

        return data
      } catch (error) {
        // return custom error message from API if any
        console.log("ERRRRRRROOOOOOORRR")
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else if(error.status === 401){
          return rejectWithValue("Please check your credintials, incorrect username or password!")
        }else if(error.status === 400){
          return rejectWithValue("Username already exist!")
        }{
          return rejectWithValue("Nework Error")
        }
      }
    }
  )


 