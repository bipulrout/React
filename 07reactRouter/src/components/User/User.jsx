import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 text-white py-2 font-semibold shadow-lg'>
      User: {userid}
    </div>
  )
}

export default User
