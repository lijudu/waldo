import * as React from 'react';
import {useState} from 'react'
import {Characters} from './Characters'

export interface NavItems {


}

export function Navbar (props: NavItems) {

    const [showCharacters, setShowCharacters] = useState(false)

    const onClick = () => {
      if (showCharacters === false) {
        setShowCharacters(true)
      } else if (showCharacters === true) {
        setShowCharacters(false)
      }
    }

  return (
    <div className='flex justify-evenly bg-white top-0 fixed left-0 right-0'>
      <li className='list-none'>
        <button className=''>Restart</button>
      </li>
      <li className='list-none'>
        <button className=' '>Timer</button>
      </li>
      <li className='list-none'>
        <button 
          className='text-center inline-flex items-center' 
          type="button"
          onClick={onClick}>
              Dropdown button</button>
        { showCharacters ? <Characters /> : null }
      </li>
    </div>
  );
}
