import * as React from 'react';

export interface IAppProps {
}

export function Characters (props: IAppProps) {

  return (
    <div>
        <ul className='absolute bg-white' >
            <li className='cursor-default'>prisoners</li>
            <li className='cursor-default'>guards</li>
            <li className='cursor-default'>hanging</li>
        </ul>
    </div>
  );
}
