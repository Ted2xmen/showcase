import { createSlice } from '@reduxjs/toolkit'
import projects from '../data/projects.json'

// Thunks are typically written in "slice" files. createSlice itself does not have any special support for defining thunks, so you should write them as separate functions in the same slice file. That way, they have access to the plain action creators for that slice, and it's easy to find where the thunk lives.

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    tech: '',
    style: '',
    string: '',
    projects: projects,
    filteredProjects: [],
    githubData: [],
    githubExample: 'data from reduxtk',
  },
  reducers: {
    setSearch: (state, action) => {
      state.tech = action.payload
    },
    setTech(state, action) {
      state.tech = action.payload
    },
    setStyle(state, action) {
      state.style = action.payload
    },
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
