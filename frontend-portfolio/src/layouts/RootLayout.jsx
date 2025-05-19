import React from 'react'
import {Outlet} from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div className='flex max-w-full flex-col bg-white dark:bg-slate-900'>
        <main cla>
            <Outlet/>
        </main>
    </div>
  )
}
