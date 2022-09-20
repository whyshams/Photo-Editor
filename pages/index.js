import React from 'react'
import Link from 'next/link'
const index = () => {
  
  return (
    <div className='col-md-12 text-center mt-2'>
      <Link href="/Upload">
    <nav className='btn btn-warning p-3 '>
        Upload or Drag and Drop Image to edit
    </nav>
    </Link>
    <h1>OR</h1>
    <Link href="/Url">
    <nav className='btn btn-warning p-3 '>
        Paste Image Link to edit
    </nav>
    </Link>
</div>
  )
}

export default index