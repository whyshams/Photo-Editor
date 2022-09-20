import React from 'react';
import {useRouter} from 'next/router'


const Layout = ({children}) => {
    const router = useRouter()
  return (
    <div>
       <button className='btn btn-danger p-3' onClick={() => router.back()}>Go Back</button>
        <div>{children}</div>
    </div>
  )
}

export default Layout