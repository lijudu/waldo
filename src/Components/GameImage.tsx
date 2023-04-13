import * as React from 'react'
import { useState, useEffect } from 'react'
import { Characters } from './Characters';

export interface IAppProps {
  x: number,
  y: number,
}


export function GameImage () {

  const [showCharacters, setShowCharacters] = useState(false)
  const [target, setTarget] = useState([])

  const getLocation = (e: React.MouseEvent<HTMLInputElement>) => {

    if (showCharacters === false) {
      setShowCharacters(true)
    } else if (showCharacters === true) {
      setShowCharacters(false)
    }

    setTarget([e.pageX, e.pageY])

    console.log(target)
    }


  return (
    <div>
        <div className='bg-background-image bg-auto  h-[92rem] w-full bg-center bg-no-repeat'
              onClick={getLocation}/>
        {showCharacters && (
          <div className='z-10 absolute  text-3xl text-red-200' 
            style={{top: `${target[1]}px`, left: `${target[0]}px`}}>
            <Characters/>
          </div>
        )}
    </div>
  );
}


