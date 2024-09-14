import React from 'react'
import Link from 'next/link'

const page = () => {
      return (
            <div className='flex justify-center gap-4 items-center h-screen'>
                  <Link href="/admin"><button className='p-2 bg-purple-500 rounded-lg'>Admin</button></Link>
                  <Link href="/client"><button className='p-2 bg-purple-500 rounded-lg'>Client</button></Link>
            </div>
      )
}

export default page