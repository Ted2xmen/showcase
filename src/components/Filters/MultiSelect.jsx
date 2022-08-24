import React, { useState } from 'react'
import Select from 'react-select'

// delete react-select

const MultiSelect = () => {
  const [option, setOption] = React.useState(null)

  const handleTechOption = (e) => {
    console.log(e.target.value)
  }

  const handleStyleOption = (e) => {
    console.log(e.target.value)
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
          <option value="next">Next JS</option>
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
          <option value="tailwindcss">Tailwind CSS</option>
          <option value="styledcomponents">Styled Components</option>
          <option value="bootstrap">Bootstrap</option>
          <option value="materialui">Material UI</option>
        </select>
      </div>
    </div>
  )
}
export default MultiSelect
