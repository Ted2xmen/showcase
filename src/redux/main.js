import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    value: 109,
    kelime: 'deneme',
  },
  reducers: {},
})

export default mainSlice.reducer
