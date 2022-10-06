import {combineReducers, createSlice} from "@reduxjs/toolkit";

import {userLogin} from "../../api/useraction";

import { fetchAdcategory } from "../../api/useraction";



// initialize userToken from local storage

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
    isloggedin:false,
    adCategory:[]
  }


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
      state.success=true
      state.isloggedin=true
    },
    [userLogin.rejected]: (state, { payload }) => {
      console.log("user payload error",payload);
      state.loading = false
      state.error = payload
      
    },
   
  },
})

const fetchAdCategorySlice = createSlice({
  name: 'fetchAd',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [fetchAdcategory.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchAdcategory.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.adCategory=payload
    },
    [fetchAdcategory.rejected]: (state, { payload }) => {
      
      state.loading = false
      state.error = payload
      
    },
   
  },
})

const reducerWhole =combineReducers({
  login:userSlice.reducer,
  adcategory:fetchAdCategorySlice.reducer,

})
 
export default reducerWhole;

// export ;