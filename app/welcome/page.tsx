import Header from '@/components/header'
import React from 'react'

const Welcome = () => {
  return (
    <>
    <Header/>
    <div className="flex border-2 border-white w-5/12 h-96 mt-8 shadow-md shadow-emerald-400">
      <p className='text-6xl text-center self-center'>
        Welcome to the technical interview
      </p>
    </div>
    </>
  )
}

export default Welcome