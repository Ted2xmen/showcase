import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { setTech, setStyle } from '../../redux/main'

import { Trans } from 'react-i18next'

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
      <div className="hidden">
        <input type="checkbox" name="typescript" id="typescript" />
        <label className="ml-1" htmlFor="typescript">
          TypeScript
        </label>
      </div>
      <div>
        <label className="mr-2" htmlFor="tech">
          <Trans i18nKey="site.techstack">Tech Stack</Trans>
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
          <Trans i18nKey="site.styling">Styling</Trans>
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
