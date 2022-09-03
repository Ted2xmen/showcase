import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/main'

const Search = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <input
        onChange={(e) => {
          dispatch(setSearch(e.target.value.toLowerCase()))
        }}
        className="w-1/2 rounded-lg border-2 border-border bg-slate-800 p-3 shadow-lg"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
