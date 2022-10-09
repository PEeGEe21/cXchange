import Link from 'next/link'
import React from 'react'

const SideBar = ({showMobile}) => {
  return (
    <>
        <div className={`sidebarmenu ${showMobile ? 'show' : ''} py-5 overflow-y-auto`}>
            <div className=''>
                <div className='px-6 py-4 flex items-center justify-center border-b border-gray-100'>
                    <a className='' href='/' >
                        <img src='/images/logo.svg'/>
                    </a>
                </div>
                <div className='mt-6'>
                    <div className='flex flex-col items-start space-y-4'>
                        <Link href='/' >
                            <a  className='px-6 py-4 w-full hover:bg-gray-200 transition duration-300 ease-in-out text-lg text-[#5B5B5B]'>Dashboard</a>
                        </Link>

                        <Link href='/transfer' >
                            <a className='px-6 py-4 w-full hover:bg-gray-200 transition duration-300 ease-in-out text-lg text-[#5B5B5B]'>Transfer</a>
                        </Link>
                        <Link href='/transfer' >
                            <a className='px-6 py-4 w-full hover:bg-gray-200 transition duration-300 ease-in-out text-lg text-[#5B5B5B]'>Stake</a>
                        </Link>
                        <Link href='/transfer' >
                            <a className='px-6 py-4 w-full hover:bg-gray-200 transition duration-300 ease-in-out text-lg text-[#5B5B5B]'>Swap</a>
                        </Link>
                        <Link href='/transfer' >
                            <a className='px-6 py-4 w-full hover:bg-gray-200 transition duration-300 ease-in-out text-lg text-[#5B5B5B]'>NFTs</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar