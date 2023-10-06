import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between text-white bg-black px-10 py-5'>
        <h1 className='text-4xl ml-2 font-bold'>Comfort_Zone</h1>
        <div className='flex items-center space-x-4'>
            <p className='text-2xl font-medium mr-4'>Upcoming Movies</p>
            <p className='text-2xl font-medium mr-4'>Popular</p>
        </div>
        <form className='flex items-center'>
                <input type="text" className='text-xl border-b border-b-slate-300 bg-transparent focus:outline-none '/>
                <MagnifyingGlassIcon className='w-8 h-8' />
            </form>
    </nav>
  )
}

export default Nav;