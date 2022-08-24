import { configureStore } from '@reduxjs/toolkit'
import main from './main'

export const store = configureStore({
  reducer: {
    main,
  },
})
