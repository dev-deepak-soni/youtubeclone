import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-24'>
        <ul>
            <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 bg-gray-200  rounded-lg w-40'><i className="fa fa-home" aria-hidden="true"></i> <span className='ml-2'>Home</span></li>
            <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>Shorts</li>
            <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>Subscription</li>
            <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>Library</li>
            <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>History</li>
            <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>Trending</li>
            <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>Shopping</li>
        </ul>
    </div>
  )
}

export default Sidebar