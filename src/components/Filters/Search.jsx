import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/main'

const Search = () => {
  const dispatch = useDispatch()
  return (
    <div className="mx-auto ml-4 flex items-center">
      <h2 className="mr-4 text-xl">Portolio Projects</h2>
      <input
        onChange={(e) => {
          dispatch(setSearch(e.target.value.toLowerCase()))
        }}
        className="w-1/1 rounded-lg border-2 border-border bg-slate-800 p-3 shadow-lg"
        type="text"
        placeholder="Search.. react, javascript, typescript"
      />
    </div>
  )
}

export default Search
