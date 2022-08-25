import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/main'

const Search = () => {
  const string = useSelector((state) => state.main.string)
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-center">
      <input
        onChange={(e) => {
          dispatch(setSearch(e.target.value))
        }}
        className="p-3 px-6"
        type="text"
        placeholder="search projects"
      />
    </div>
  )
}

export default Search
