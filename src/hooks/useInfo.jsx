import React from 'react'

const useInfo = (type, message) => {
  const infoStyle =
    type === 'error'
      ? 'bg-green-400'
      : type === 'success'
      ? 'bg-green-400'
      : type === 'warning'
      ? 'bg-red-400'
      : 'bg-slate-300'
  return (
    <div
      className={`flex ${infoStyle} m-2 flex-col  rounded-md  p-5 shadow-lg`}>
      <div className="text-gray-800">
        {type}
        <p>{message} </p>
      </div>
    </div>
  )
}

export default useInfo
