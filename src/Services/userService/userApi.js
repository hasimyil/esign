import { Config } from "@/Config";
import axios from "axios";

export  const getCurrentUser =
    async (token ) => {
      try {
        // configure header's Content-Type as JSON
        console.log("GET USER",token)
        const data = await axios({
            headers: { 
                'Authorization' : "Bearer "+ token
            },
            method: 'get',
            url: `${Config.API_URL_original}accounts/current`,
        })
        .then((response) => response)
        .catch((e) => console.log(e));
      
        console.log(data,"testtt")
        // store user's token in local storage
        // localStorage.setItem('userToken', data.userToken)
  
        return data
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  