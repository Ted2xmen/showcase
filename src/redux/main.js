import { createSlice } from '@reduxjs/toolkit'
import projects from '../data/projects.json'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    tech: '',
    style: '',
    string: '',
    projects: projects,
    filteredProjects: [],
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

export default mainSlice.reducer

export const {
  setTech,
  setSearch,
  setStyle,
  filteredProjects,
  setFilteredProjects,
} = mainSlice.actions
