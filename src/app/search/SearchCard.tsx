import React from 'react'


function SearchCard( {user} : any) {
  return (
       <div className="border  border-[#588157] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-[#344e41]">
      <h2 className="text-lg font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700 mb-1 "><span className='font-semibold'> Email: </span> {user.email}</p>
      <p className="text-gray-600"> <span className='font-semibold'> Company: </span>{user.company.name}</p>
    </div>
  )
}

export default SearchCard