import { configureStore } from '@reduxjs/toolkit'
import main from './main'
import formSlice from './formSlice'

// The most common async middleware is redux-thunk, which lets you write plain functions that may contain async logic directly. Redux Toolkit's configureStore function automatically sets up the thunk middleware by default, and we recommend using thunks as the standard approach for writing async logic with Redux.

export const store = configureStore({
  reducer: {
    main,
    form: formSlice,
  },
})
