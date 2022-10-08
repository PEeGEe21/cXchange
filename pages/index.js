import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const title = 'cXchange | Dashboard'
  const content = 'cXchange Dashboard'
  return (
    <>
    
     <Layout title={title} content={content}>
        <div className="main-box max-w-6xl mx-auto container px-2 sm:px-3 md:px-8">

          <main className="h-full pb-24 px-4 md:px-12 py-12">
                    <div className="w-full flex items-center justify-between pb-4 mb-3 flex-wrap">
                      <div className='grow'> 
                        <h1 className="text-3xl font-bold text-gray-800 mb-3 ">
                          Welcome back, Anna
                          </h1>
                          <h2 className="text-md text-gray-400">
                            Swap, stake and transfer your crptocurrencies.
                          </h2>
                      </div>

                      <button className=" items-center mt-4 lg:mt-0 px-12 py-2 rounded h-12  bg-[#45CD85]  hover:bg-[#45CD85]/80 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md justify-center  " id="addliquiditybtn">
              
                          Deposit
                          
                      </button>

                    </div>
                   
                    <div className="flex my-6 items-stretch w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                        <div className="w-full md:w-7/12 flex-col flex-1 md:space-y-4 h-full">
                            <div className="shadow w-full bg-white relative px-6 py-6 rounded">
                              <div className='flex items-end justify-between  py-4'>
                                <div className="flex items-start justify-between flex-col gap-3 w-full">
                                    <h5>Total Balance </h5>
                                    <h3 className="text-neutral800 text-4xl	">$40,000.64</h3>
                                </div>
                                <div>
                                  <button className='text-sm text-[#45CD85]'>
                                    withdraw
                                  </button>
                                  
                                </div>
                              </div>
                                
                            </div>
                            <div className="shadow w-full bg-white mt-3 md:mt-0  relative overflow-hidden rounded">
                              <div className="px-6 py-6 w-full    relative">
                                  
                                  <h5 className="text-gray-400 mb-3">Available Balances</h5>

                                  <div className=" ">
                                      <div className="flex items-center py-4 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                                          <div className="flex items-center justify-start gap-2">
                                              <span>
                                                  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M24 48.5C37.2548 48.5 48 37.7548 48 24.5C48 11.2452 37.2548 0.5 24 0.5C10.7452 0.5 0 11.2452 0 24.5C0 37.7548 10.7452 48.5 24 48.5Z" fill="#45CD85"/>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M27.466 27.6859H29.3733V26.1882C32.1865 25.85 33.9984 24.2074 33.9984 21.985C33.9984 18.893 31.5667 18.2166 29.2779 17.7818V13.6752C30.3746 13.7719 31.5667 14.11 32.6633 14.6415V12.2259C31.6143 11.8394 30.47 11.5978 29.3733 11.5495V10.1001H27.466V11.5495C24.5574 11.8877 22.8885 13.5303 22.8885 15.6077C22.8885 18.7481 25.2726 19.4727 27.5614 19.9076V24.0141C26.1786 23.8209 24.7004 23.2411 22.9839 22.3232V24.8838C24.462 25.6084 25.9878 26.0916 27.466 26.1882V27.6859ZM33.2355 30.0532C31.7574 34.2564 27.7998 37.3001 23.1269 37.3001C17.2143 37.3001 12.3984 32.4205 12.3984 26.4298C12.3984 21.6951 15.4024 17.6852 19.5508 16.1875V19.1346C16.8806 20.439 15.0686 23.2411 15.0686 26.4298C15.0686 30.9228 18.6925 34.5946 23.1269 34.5946C26.2739 34.5946 29.0395 32.7587 30.3269 30.0532H33.2355ZM29.2779 20.0525V24.0141C30.7561 23.8209 31.662 23.0479 31.662 21.985C31.662 20.8255 30.613 20.3907 29.2779 20.0525ZM25.2249 15.6077C25.2249 16.8156 26.2263 17.2987 27.5614 17.5886V13.6752C26.0832 13.8202 25.2249 14.4965 25.2249 15.6077Z" fill="white"/>
                                                      </svg>
                                              </span>
                                              <div className="flex items-start gap-1 flex-col">
                                                  <p className="text-xl">cUSD</p>
                                                  <p>Celo US Dollar</p>
                                              </div>
                                              
                                          </div>
                                          <div className="flex items-start text-xs flex-col">
                                              <h4 className="text-xl">$ 0.00</h4>
                                              <span className="flex items-center">
                                                  cUSD 0.00
                                              </span>
                                          </div>
                                      </div>



                                      <div className="flex items-center py-4 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                                          <div className="flex items-center justify-start gap-2">
                                              <span>

                                                
                                              <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <g clipPath="url(#clip0_1248_13586)">
                                                      <path d="M24 48.5C37.2548 48.5 48 37.7548 48 24.5C48 11.2452 37.2548 0.5 24 0.5C10.7452 0.5 0 11.2452 0 24.5C0 37.7548 10.7452 48.5 24 48.5Z" fill="#45CD85"/>
                                                      <path d="M21.3586 37.94C26.0626 37.94 30.0466 34.916 31.5346 30.74H28.6066C27.3106 33.428 24.5266 35.252 21.3586 35.252C16.8946 35.252 13.2466 31.604 13.2466 27.14C13.2466 23.972 15.0706 21.188 17.7586 19.892V16.964C13.5826 18.452 10.5586 22.436 10.5586 27.14C10.5586 33.092 15.4066 37.94 21.3586 37.94ZM30.3826 27.62C31.9666 27.62 33.4546 27.188 34.7026 26.42V23.924C33.5026 24.836 32.0626 25.412 30.4306 25.412C28.1266 25.412 26.3026 24.308 25.4386 22.484H31.8226L32.3986 20.564H24.8626C24.8146 20.276 24.8146 20.036 24.8146 19.748C24.8146 19.46 24.8146 19.172 24.8626 18.884H32.9266L33.5026 16.964H25.3906C26.2546 15.092 28.0306 13.988 30.4306 13.988C31.7266 13.988 32.9746 14.324 34.1266 14.948L34.7986 12.788C33.5026 12.116 31.9666 11.78 30.4306 11.78C26.8306 11.78 23.9986 13.844 22.9426 16.916H20.8306L20.2546 18.74H22.5586C22.5106 19.076 22.5106 19.412 22.5106 19.748C22.5106 20.084 22.5106 20.372 22.5586 20.708H20.8306L20.2546 22.532H22.9906C23.9986 25.604 26.7826 27.62 30.3826 27.62Z" fill="white"/>
                                                  </g>
                                                      <defs>
                                                          <clipPath id="clip0_1248_13586">
                                                              <rect width="48" height="48" fill="white" transform="translate(0 0.5)"/>
                                                          </clipPath>
                                                      </defs>
                                                  </svg>
      
                                              </span>
                                              <div className="flex items-start gap-1 flex-col">
                                                  <p className="text-xl">cEUR</p>
                                                  <p>Celo Euro</p>
                                              </div>
                                              
                                          </div>
                                          <div className="flex items-start text-xs flex-col">
                                              <h4 className="text-xl">€ 0.00</h4>
                                              <span className="flex items-center">
                                                  cEUR 0.00
                                              </span>
                                          </div>
                                      </div>


                                      <div className="flex items-center py-4 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                                          <div className="flex items-center justify-start gap-2">
                                              <span>


                                                  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <g clipPath="url(#clip0_1248_13586)">
                                                          <path d="M24 48.5C37.2548 48.5 48 37.7548 48 24.5C48 11.2452 37.2548 0.5 24 0.5C10.7452 0.5 0 11.2452 0 24.5C0 37.7548 10.7452 48.5 24 48.5Z" fill="#45CD85"/>
                                                          <path d="M21.3586 37.94C26.0626 37.94 30.0466 34.916 31.5346 30.74H28.6066C27.3106 33.428 24.5266 35.252 21.3586 35.252C16.8946 35.252 13.2466 31.604 13.2466 27.14C13.2466 23.972 15.0706 21.188 17.7586 19.892V16.964C13.5826 18.452 10.5586 22.436 10.5586 27.14C10.5586 33.092 15.4066 37.94 21.3586 37.94ZM30.3826 27.62C31.9666 27.62 33.4546 27.188 34.7026 26.42V23.924C33.5026 24.836 32.0626 25.412 30.4306 25.412C28.1266 25.412 26.3026 24.308 25.4386 22.484H31.8226L32.3986 20.564H24.8626C24.8146 20.276 24.8146 20.036 24.8146 19.748C24.8146 19.46 24.8146 19.172 24.8626 18.884H32.9266L33.5026 16.964H25.3906C26.2546 15.092 28.0306 13.988 30.4306 13.988C31.7266 13.988 32.9746 14.324 34.1266 14.948L34.7986 12.788C33.5026 12.116 31.9666 11.78 30.4306 11.78C26.8306 11.78 23.9986 13.844 22.9426 16.916H20.8306L20.2546 18.74H22.5586C22.5106 19.076 22.5106 19.412 22.5106 19.748C22.5106 20.084 22.5106 20.372 22.5586 20.708H20.8306L20.2546 22.532H22.9906C23.9986 25.604 26.7826 27.62 30.3826 27.62Z" fill="white"/>
                                                      </g>
                                                      <defs>
                                                          <clipPath id="clip0_1248_13586">
                                                              <rect width="48" height="48" fill="white" transform="translate(0 0.5)"/>
                                                          </clipPath>
                                                      </defs>
                                                  </svg>
                                                      
                                              </span>
                                              <div className="flex items-start gap-1 flex-col">
                                                  <p className="text-xl">cReal</p>
                                                  <p>Celo Real</p>
                                              </div>
                                              
                                          </div>
                                          <div className="flex items-start text-xs flex-col">
                                              <h4 className="text-xl">R$ 0.00</h4>
                                              <span className="flex items-center">
                                                  cReal 0.00
                                              </span>
                                          </div>
                                      </div>




                                      <div className="flex items-center py-4 mb-2 text-sm sm:space-x-12  justify-between ">
                                          <div className="flex items-center justify-start gap-2">
                                              <span>

                                                  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <circle cx="24" cy="24.5" r="24" fill="#E7EFF3"/>
                                                          <path fillRule="evenodd" clipRule="evenodd" d="M10 27.4474C10 33.5514 14.9486 38.5 21.0526 38.5C27.1566 38.5 32.1053 33.5514 32.1053 27.4474C32.1053 21.3434 27.1566 16.3948 21.0526 16.3948C14.9486 16.3948 10 21.3434 10 27.4474ZM29.1579 27.4474C29.1579 31.9245 25.5297 35.5527 21.0526 35.5527C16.5756 35.5527 12.9474 31.9245 12.9474 27.4474C12.9474 22.9704 16.5756 19.3421 21.0526 19.3421C25.5297 19.3421 29.1579 22.9704 29.1579 27.4474Z" fill="#FBCC5C"/>
                                                          <path fillRule="evenodd" clipRule="evenodd" d="M15.8945 21.5526C15.8945 27.6566 20.8432 32.6053 26.9472 32.6053C33.0512 32.6053 37.9998 27.6566 37.9998 21.5526C37.9998 15.4486 33.0512 10.5 26.9472 10.5C20.8432 10.5 15.8945 15.4486 15.8945 21.5526ZM35.0524 21.5526C35.0524 26.0297 31.4242 29.6579 26.9472 29.6579C22.4701 29.6579 18.8419 26.0297 18.8419 21.5526C18.8419 17.0756 22.4701 13.4474 26.9472 13.4474C31.4242 13.4474 35.0524 17.0756 35.0524 21.5526Z" fill="#35D07F"/>
                                                          <path fillRule="evenodd" clipRule="evenodd" d="M15.8945 21.1872C16.8259 20.4209 17.9135 19.8727 19.0806 19.5809C19.3724 18.4108 19.9206 17.3232 20.687 16.3948C19.3371 16.439 18.0019 16.7308 16.7552 17.2554C16.2276 18.5021 15.9358 19.8344 15.8945 21.1872ZM28.919 29.4192C28.6272 30.5893 28.079 31.6769 27.3126 32.6053C28.6655 32.564 29.9977 32.2722 31.2444 31.7476C31.772 30.4979 32.0638 29.1657 32.1051 27.8129C31.1737 28.5792 30.0861 29.1274 28.919 29.4192Z" fill="#5EA33B"/>
                                                  </svg>
                                                      
                                              </span>
                                              <div className="flex items-start gap-1 flex-col">
                                                  <p className="text-xl">Celo</p>
                                                  <p>Celo Coin</p>
                                              </div>
                                              
                                          </div>
                                          <div className="flex items-start text-xs flex-col">
                                              <h4 className="text-xl">$ 0.00</h4>
                                              <span className="flex items-center">
                                                  Celo 0.00
                                              </span>
                                          </div>
                                      </div>







                                  </div>
                              </div>
                            </div>
                        </div>
                        <div className="w-full md:w-5/12 space-x-4 rounded h-full shadow px-4 py-6 bg-white">
                            <div className="  relative">
                                <div className="w-full  flex items-center justify-between pb-2">
                                    <h4 className="text-md  text-[#5B5B5B]   font-normal	 ">
                                    Recent Transactions
                                    </h4>

                                </div>
                                <div className='h-full flex-1 grow'>
                                  <div className='flex items-center justify-center h-full flex-col gap-9 py-14'>
                                    <div>
                                      <img src='/images/pic.png'/>
                                    </div>
                                    <div>No recent transactions</div>
                                    
                                  </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
          </main>
        </div>
    </Layout>
    </>
  )
}
