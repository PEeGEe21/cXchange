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
                                <div className=" w-full relative px-2 md:px-6 py-6 h-full grow">
                                    <h1 className="text-3xl font-bold text-gray-800 mb-3 ">
                                            Transfer
                                    </h1>
                                    <h2 className="text-md text-gray-400">
                                        Transfer to other wallets
                                    </h2>
                                </div>
                            </aside>
                            
                        </div>
                        <div className="w-full md:w-8/12 space-x-4 rounded h-full px-0 md:px-6 lg:px-8 border-t md:border-t-0 md:border-l bg-white">
                                <div className="py-8 px-4 md:px-6 lg:px-8 mt-4 login--bx border border-[#E6E6E7] rounded-md">
                                <form>

                                        
                                    <div className="mb-6">
                                        <label className="text-gray-700 font-medium mb-3" htmlFor="wallet_address">Wallet Address</label>
                                        <input id="wallet_address" type="text" placeholder="Paste wallet address here" className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="wallet_address" autocomplete="off"/>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex justify-between items-center">                                
                                            <label className="text-gray-700 font-medium" htmlFor="token">Token</label>
                                        </div>
                                        <div className="dropdown relative grow large-dropdown mb-4" data-large-dropdown="">
                                            <button className="w-full bg-white h-12 focus:outline-none active:outline-none  flex items-center justify-between border border-neutral100 focus:border-gray_cl active:border-gray_cl px-4 py-3 mt-2 rounded-lg" id="token" data-large-dropdown-btn="" type="button">
                                                <span className="pointer-events-none flex items-center gap-2 text-gray-400">
                                                    <svg className='h-8 w-8' viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="24" cy="24.5" r="24" fill="#E7EFF3"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 27.4474C10 33.5514 14.9486 38.5 21.0526 38.5C27.1566 38.5 32.1053 33.5514 32.1053 27.4474C32.1053 21.3434 27.1566 16.3948 21.0526 16.3948C14.9486 16.3948 10 21.3434 10 27.4474ZM29.1579 27.4474C29.1579 31.9245 25.5297 35.5527 21.0526 35.5527C16.5756 35.5527 12.9474 31.9245 12.9474 27.4474C12.9474 22.9704 16.5756 19.3421 21.0526 19.3421C25.5297 19.3421 29.1579 22.9704 29.1579 27.4474Z" fill="#FBCC5C"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8945 21.5526C15.8945 27.6566 20.8432 32.6053 26.9472 32.6053C33.0512 32.6053 37.9998 27.6566 37.9998 21.5526C37.9998 15.4486 33.0512 10.5 26.9472 10.5C20.8432 10.5 15.8945 15.4486 15.8945 21.5526ZM35.0524 21.5526C35.0524 26.0297 31.4242 29.6579 26.9472 29.6579C22.4701 29.6579 18.8419 26.0297 18.8419 21.5526C18.8419 17.0756 22.4701 13.4474 26.9472 13.4474C31.4242 13.4474 35.0524 17.0756 35.0524 21.5526Z" fill="#35D07F"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8945 21.1872C16.8259 20.4209 17.9135 19.8727 19.0806 19.5809C19.3724 18.4108 19.9206 17.3232 20.687 16.3948C19.3371 16.439 18.0019 16.7308 16.7552 17.2554C16.2276 18.5021 15.9358 19.8344 15.8945 21.1872ZM28.919 29.4192C28.6272 30.5893 28.079 31.6769 27.3126 32.6053C28.6655 32.564 29.9977 32.2722 31.2444 31.7476C31.772 30.4979 32.0638 29.1657 32.1051 27.8129C31.1737 28.5792 30.0861 29.1274 28.919 29.4192Z" fill="#5EA33B"/>
                                                    </svg>

                                                    Celo
                                                </span>
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
                                        <input id="amount" type="text" className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="amount" autocomplete="off" placeholder='Paste wallet address here'/>
                                        
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