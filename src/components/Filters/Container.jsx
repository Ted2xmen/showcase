import React from 'react'
import MultiSelect from './MultiSelect'
import Search from './Search'

const Container = () => {
  return (
    <div className="mx-auto flex flex-row justify-between px-12">
      <Search />
      <MultiSelect />
    </div>
  )
}

export default Container
