import * as React from 'react';

export interface IAppProps {
}

export function GameImage (props: IAppProps) {

  const getLocation = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e.pageX, e.pageY)
  }
  
  return (
    <div>
        <div className='bg-background-image bg-auto  h-[92rem] w-full bg-center bg-no-repeat'
              onClick={getLocation}/>
    </div>
  );
}
