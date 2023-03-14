import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <>
            <div className="flex ...">
                <div className="flex-none w-44">
                    <Sidebar/>
                </div>
                <div className="flex-1">
                    <div className='flex'>
                        <ul className='flex'>
                            <li className='m-4 p-2 hover:bg-gray-200 bg-black border rounded-lg text-white'>All</li>
                            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Music</li>
                            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Arijit Singh</li>
                            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Bollywood Music</li>
                            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Comedy</li>
                            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Cartoons</li>
                            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Kids</li>
                        </ul>
                    </div>
                    <p className='bg-green-400'>
                    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <p className='bg-red'>
                    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
        </>
    )
}

export default Dashboard