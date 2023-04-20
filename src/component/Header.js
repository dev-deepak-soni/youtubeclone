import { useEffect, useState } from 'react'
import logo from '../img/youtube.png'
import menuIcon from '../img/sidebar.png'
import searchIcon from '../img/search.png'
import { searchURL } from '../config/Constant'
import { useDispatch, useSelector } from 'react-redux'
import Store from '../redux/Store'
import { sotreCache } from '../redux/SearchSlice';
import { Link } from 'react-router-dom'
import Sidebarslice from '../redux/Sidebarslice'
import {toogleSidebar} from '../redux/Sidebarslice'

const Header = () => {
  
  const [searchString, setSearchString] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [clickedValue, setClickedValue] = useState('');

  const dispatch = useDispatch();
  const cache = useSelector((Store) => Store.Search);
  const Sidebardata = useSelector((Store) => Store.Sidebarslice);
  useEffect(() => {
    searchSuggestions();
  }, [searchString])

  const searchSuggestions = async () => {
    try {
      if (cache[searchString]) {
        setSearchedData(cache[searchString]);
      } else {
        const searchData = await fetch(searchURL + searchString);
        const parseData = await searchData.json();
        setSearchedData(parseData[1])

        dispatch(sotreCache({
          [searchString]: parseData[1]
        }))
      }


    } catch (error) {
      console.log('error', error.message);
    }
  }

  const hanldeKeydown = (event) => {
    try {
      console.log('data-----', event.target.value);
    } catch (error) {
      console.log('error---', error.message);
    }
  }

  const hanldeClick = (text) => {
    try {
      console.log('text', text);
      setClickedValue(text);
      setShowSearchSuggestions(false);
    } catch (error) {
      console.log('error---', error.message);
    }
  }
  const handleChange = (e) => {
    try {
      const timeout = setTimeout(() => {
        setSearchString(e.target.value);
      }, 800);
      setClickedValue(e.target.value);
    } catch (error) {
      console.log('error---', error.message);
    }
    return () => {
      clearTimeout(timeout);
    }
  }

  const sidebarOnOff = () => {
    dispatch(toogleSidebar(!Sidebardata.isSidebarOn))
  }

  return (
    <div className="w-full top-0 fixed bg-white h-16">
      <div className="flex">
        <div className='cursor-pointer' onClick={sidebarOnOff}><img src={menuIcon} className='h-6 w-7 mt-4 ml-4 hover:bg-gray-300 rounded-lg' /></div>
        <Link to='/'><div className='cursor-pointer'><img src={logo} className='h-8 w-28 mt-3 ml-7' /></div></Link>
        <div className='mt-2 '>
          <input type='text'
            onChange={handleChange}
            // onBlur={() => setShowSearchSuggestions(false)}
            onFocus={() => setShowSearchSuggestions(true)}
            onKeyDown={hanldeKeydown}
            value={clickedValue}
            className='border border-gray-800 pl-[14px] w-[539px] rounded-l-full  ml-32 h-9' placeholder='Search' />
          <button className='rounded-r-full border border-black h-9 w-12'><img src={searchIcon} className='ml-4' /></button></div>

        {showSearchSuggestions && searchedData && searchString &&
          <div className="mt-11 ml-[19.5rem] fixed bg-white py-2 px-2 w-[539px] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {
                (searchedData && searchedData.map((x, i) =>
                  <li
                    key={`${x}_${i}`}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100 block"
                    onKeyDown={hanldeKeydown}
                    onClick={() => hanldeClick(x)}
                  >
                    {x}
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Header