import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import projects from '../data/projects.json'
import axios from 'axios'

const API_URL = 'https://api.github.com/users/Ted2xmen/starred'

// Thunks are typically written in "slice" files. createSlice itself does not have any special support for defining thunks, so you should write them as separate functions in the same slice file. That way, they have access to the plain action creators for that slice, and it's easy to find where the thunk lives.
export const getData = createAsyncThunk('main/getData', async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    return error.message
  }
})

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    tech: '',
    style: '',
    string: '',
    projects: projects,
    filteredProjects: [],
    githubData: [],
    fetchData: [],
    repo: [],
  },
  reducers: {
    setSearch: (state, action) => {
      state.string = action.payload
    },
    setTech(state, action) {
      state.tech = action.payload
    },
    setStyle(state, action) {
      state.style = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getData.fulfilled, (state, action) => {
      return void (state.repo = action.payload)
    })
  },
})

export default mainSlice.reducer // for store.js

export const {
  setTech,
  setSearch,
  setStyle,
  filteredProjects,
  setFilteredProjects,
} = mainSlice.actions // for components
