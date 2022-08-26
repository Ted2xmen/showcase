import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/main'

const Search = () => {
  const dispatch = useDispatch()
  return (
    <div className="my-5 flex items-center justify-center">
      <input
        onChange={(e) => {
          dispatch(setSearch(e.target.value.toLowerCase()))
        }}
        className="border-2 border-green-600 bg-slate-800 p-3 px-6"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
