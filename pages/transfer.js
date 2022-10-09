import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import DropdownIcon from '../components/icons/DropdownIcon'

const Transfer = () => {
    const title = 'cXchange | Transfer'
    const content = 'cXchange Transfer'

  return (
    <>
        
        <Layout title={title} content={content}/>
        <div className="main-box max-w-6xl mx-auto container px-2 sm:px-3 md:px-8">

          <main className="h-full pb-24 px-4 md:px-12 py-12">
                    
                   
                    <div className="flex items-stretch w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                        <div className="w-full md:w-4/12 flex-col flex-1 md:space-y-4 h-full ">
                            <aside>
                                <div className=" w-full relative px-6 py-6 h-full">
                                    <div className='grow'> 
                                        <h1 className="text-3xl font-bold text-gray-800 mb-3 ">
                                            Transfer
                                        </h1>
                                        <h2 className="text-md text-gray-400">
                                            Transfer to other wallets
                                        </h2>
                                    </div>
                                    
                                </div>
                            </aside>
                            
                        </div>
                        <div className="w-full md:w-8/12 space-x-4 rounded h-full px-3 lg:px-8 border-t md:border-t-0 md:border-l bg-white">
                                <div className="py-8 px-4 md:px-6 lg:px-8 mt-4 login--bx border border-[#E6E6E7] rounded-md">
                                <form>

                                        
                                    <div className="mb-6">
                                        <label className="text-gray-700 font-medium mb-3" htmlFor="wallet_address">Wallet Address</label>
                                        <input id="wallet_address" type="text" placeholder="Paste wallet address here" className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="wallet_address" autocomplete="off"/>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex justify-between items-center">                                
                                            <label className="text-gray-700 font-medium" htmlFor="token">Token</label>
                                        </div>
                                        <div className="dropdown relative grow large-dropdown mb-4" data-large-dropdown="">
                                            <button className="w-full bg-white h-12 focus:outline-none active:outline-none  flex items-center justify-between border border-neutral100 focus:border-gray_cl active:border-gray_cl px-4 py-3 mt-2 rounded-lg" id="token" data-large-dropdown-btn="" type="button">
                                                <span className="pointer-events-none text-gray-400">Select currency to withdraw</span>
                                                <span className="pointer-events-none ">
                                                    <DropdownIcon />
                                                </span>
                                            </button>

                                            

                                                <div className="hidden dropdown-menu large-dropdown px-3 py-3 shadow-box rounded-md w-full h-40 max-w-full overflow-y-auto scrollbar-change ">
                                                            
                                                    <div className="relative rounded-full  items-center flex w-full h-12 my-2 ">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full">
                                                            <span className="text-gray-500 px-3">
                                                                <svg width="22" height="22" viewBox="0 0 20 20" className="mr-3 pr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#9998A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M17.5 17.5L13.875 13.875" stroke="#9998A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                            </span>
                                                        </div>
                                                        <input type="text" name="price" id="price" className="border border-gray-300 py-2 px-4  block w-full pl-12 pr-12 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400" placeholder="search currency" autocomplete="off"/>
                                                        
                                                    </div>
                                                    <div className="mt-3 py-4">
                                                        
                                                        <button className="flex items-start py-2 px-1 hover:bg-gray-100 text-sm justify-between bg-white border-0 rounded-lg w-full " type="button">
                                                            <div className="flex items-center justify-start gap-2 pr-2">
                                                                <img src="images/cREAL 1.png"/>
                                                            </div>
                                                            <div className="flex grow flex-col justify-start items-start text-left">
                                                                    <p className="text-neutral700 font-normal text-base">cReal</p>
                                                                    <p className="text-neutral600 font-thin text-sm">$1 = 1cUSD</p>
                                                            </div>
                                                        </button>
                                                    
                                                    </div>
                                            </div>
                                        
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="text-gray-700 font-medium mb-3" htmlFor="amount">Amount</label>
                                        <input id="amount" type="text" className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="amount" autocomplete="off" placeholder='Paste wallet address here'/>
                                        
                                    </div>

                                    <div className="flex justify-end ml-auto w-full md:w-1/2">
                                        <button className=" bg-[#45CD85] w-full h-[50px] text-white bg-secondary transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-md flex items-center justify-center" type="submit">Send</button>
                                    </div>
                                    
                                    



                                    </form>
                                                    
                                </div>
                         </div>
                    </div>
                    
          </main>
        </div>
    </>
  )
}

export default Transfer