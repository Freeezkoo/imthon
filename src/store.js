import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './Redux/appSlice'


export const store = configureStore({
  reducer: {
    products:reducer
  },
})