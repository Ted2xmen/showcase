import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { setTech, setStyle } from '../../redux/main'

// delete react-select

const MultiSelect = () => {
  const dispatch = useDispatch()

  const handleTechOption = (e) => {
    console.log('multiselect', e.target.value)
    dispatch(setTech(e.target.value))
  }

  const handleStyleOption = (e) => {
    console.log(e.target.value)
    dispatch(setStyle(e.target.value))
  }

  return (
    <div className="flex items-center justify-center space-x-5 py-4">
      <div>
        <label className="mr-2" htmlFor="tech">
          Tech Stack:
        </label>
        <select
          onChange={handleTechOption}
          className="badge p-2 px-4"
          id="tech">
          <option value="all">All</option>
          <option value="vue">Vue</option>
          <option value="react">React</option>
          <option value="next-js">Next JS</option>
        </select>
      </div>

      <div>
        <label className="mr-2" htmlFor="styling">
          Styling:
        </label>
        <select
          onChange={handleStyleOption}
          className="badge p-2 px-4"
          id="styling">
          <option value="all">All</option>
          <option value="tailwind-css">Tailwind CSS</option>
          <option value="styled-components">Styled Components</option>
          <option value="bootstrap">Bootstrap</option>
          <option value="material-ui">Material UI</option>
        </select>
      </div>
    </div>
  )
}
export default MultiSelect
