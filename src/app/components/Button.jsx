import React from 'react'

export default function Button({status}) {
  return (
    <button className='bg-green-600 text-white rounded-md p-4'>{status}</button>
  )
}
