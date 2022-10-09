import React, {useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
import DropdownIcon from '../icons/DropdownIcon';
import NotificationIcon from '../icons/NotificationIcon';
import SideBar from './SideBar';


const Header = () => {
    const [showMobile, setShowMobile] = useState()
    const router = useRouter()

    const ToggleMobileMenu = () =>{
        setShowMobile(!showMobile);
    }

  return (
    <>

        <header className='bg-white shadow-header sticky top-0 z-10'>
            <div className='container mx-auto'>
                <nav className="flex items-center justify-between flex-wrap  px-6 py-4 ">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link href="/">
                            <a className="text-xl text-gray-800 font-semibold font-heading" >
                                <img src='/images/logo.svg'/>
                            </a>
                        </Link>
                    </div>
                    <div className="block lg:hidden">
                        <div className='flex gap-5'>
                            <span className=" px-3 py-2 text-[#DF9E05] bg-[#FEF9ED] transition duration-150 ease-in-out flex items-center justify-center h-9 w-9  rounded-full focus:outline-none focus:ring-0 relative ">
                                RW 
                                <span className='absolute h-2 w-2 bg-[#45CD85] right-0 bottom-0 rounded-full'></span>
                            </span>

                            <button className="flex items-center  px-3 py-2 border rounded text-[#45CD85] border-[#45CD85] " onClick={ToggleMobileMenu}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                        </div>
                        
                    </div>
                    <div className="w-full hidden  flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link href="/">
                                <a className={`block mt-4 lg:inline-block lg:mt-0 text-[#5B5B5B]  hover:bg-gray-300 px-3 py-3 mr-4 rounded-md transition-all duration-200 ease-in-out ${router.asPath === "/" && 'bg-gray-300'}`}>
                                    Dashboard
                                </a>
                            </Link>
                            
                            <Link href="/transfer">
                                <a className={`block mt-4 lg:inline-block lg:mt-0 text-[#5B5B5B]  hover:bg-gray-300 px-3 py-3 mr-4 rounded-md transition-all duration-200 ease-in-out ${router.asPath === "/transfer" && 'bg-gray-300'}`}>
                                    Transfer
                                </a>
                            </Link>
                            
                            <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 text-[#5B5B5B]  hover:bg-gray-300 px-3 py-3 mr-4 rounded-md transition-all duration-200 ease-in-out`}>
                            Stake
                            </a>
                            <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 text-[#5B5B5B]  hover:bg-gray-300 px-3 py-3 mr-4 rounded-md transition-all duration-200 ease-in-out `}>
                            Swap
                            </a>
                            <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 text-[#5B5B5B]  hover:bg-gray-300 px-3 py-3 mr-4 rounded-md transition-all duration-200 ease-in-out `}>
                            NFTs
                            </a>
                        </div>
                        <div className='lg:flex lg:items-center lg:w-auto'>
                            <div className="flex items-center justify-center relative gap-4 px-4 border-r border-r-border-border_cl">

                                <span className=" px-3 py-3 text-[#DF9E05] bg-[#FEF9ED] transition duration-150 ease-in-out flex items-center justify-center h-10 w-10 font-medium rounded-full focus:outline-none focus:ring-0 relative ">
                                RW 
                                <span className='absolute h-2 w-2 bg-[#45CD85] right-0 bottom-0 rounded-full'></span>
                                </span>
                                <button className='flex items-center '>
                                    <div className="flex items-start justify-start flex-col">
                                        <span className="h4 text-sm font-semibold">Anna Will</span>
                                        <span className="text-sm">0x34mkko....45526</span>
                                    </div>
                                    <DropdownIcon/>
                                </button>
                                

                            </div>
                            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><NotificationIcon/></a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>


        <div className='block lg:hidden'>
            <SideBar showMobile={showMobile} />
        </div>
    </>
  )
}

export default Header