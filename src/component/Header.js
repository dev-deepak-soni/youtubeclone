import React, { useEffect, useState } from 'react'
import logo from '../img/youtube.png'
import menuIcon from '../img/sidebar.png'
import searchIcon from '../img/search.png'
import {searchURL} from '../config/Constant'
const Header = () => {
  const [searchString, setSearchString] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [showSearchSuggestions,setShowSearchSuggestions] = useState(false)


  useEffect(() => {
    console.log('searchString', searchString);

    searchSuggestions();

  }, [searchString])

  const searchSuggestions = async () => {
    try {
      const searchData = await fetch(searchURL + searchString);
      const parseData = await searchData.json();
      console.log('parseData', parseData);
      setSearchedData(parseData[1])
    } catch (error) {
      console.log('error', error.message);
    }
  }


  return (
    <div className="w-full top-0 fixed bg-white h-16">
      <div className="flex">
        <div className='cursor-pointer'><img src={menuIcon} /></div>
        <div className='cursor-pointer'><img src={logo} /></div>
        <div className='mt-2 '>
          <input type='text' 
          onChange={(e) => setSearchString(e.target.value)} 
          onBlur={()=>setShowSearchSuggestions(true)}
          onFocus={()=>setShowSearchSuggestions(true)}
          className='border border-gray-800 pl-[14px] w-[539px] rounded-l-full  ml-32 h-9' placeholder='Search' />
          <button className='rounded-r-full border border-black h-9 w-12'><img src={searchIcon} className='ml-4' /></button></div>
        
        {showSearchSuggestions && searchedData &&
        <div className="mt-11 ml-[21rem] fixed bg-white py-2 px-2 w-[539px] shadow-lg rounded-lg border border-gray-100">
        <ul>
          {(searchedData && searchedData.map(x=>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100 block">
              {x}
            </li>
            ))}
          
        </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default Header