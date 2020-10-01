import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducers from './slices.js'

export default configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware(),
  devTools: true
})
