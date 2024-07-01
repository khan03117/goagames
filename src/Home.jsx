// import React from 'react'
import { CloseOutlined, FacebookFilled, RightOutlined, ShareAltOutlined } from '@ant-design/icons'
import logo from './assets/logo.png'
import { useState } from 'react'
const Home = () => {
    const [open, setOpen] = useState(false);
    const handleopen = () => {
        setOpen(!open);
    }
    return (
        <>
            {
                open && (
                    <>
                        <div className={`fixed transition-all duration-500 lg:w-1/2 w-full p-5 bg-white rounded-t-lg  bottom-0 start-[50%] translate-x-[-50%] z-20 ${open ? 'translate-y-0' : 'translate-y-full'}`}>
                            <div className="w-full flex items-center justify-between py-2 border-b border-gray-400">
                                <h4 className="text-primary font-bold text-lg">
                                    Share Me
                                </h4>
                                <button onClick={handleopen} className=" text-white bg-primary size-8 rounded-full">
                                    <CloseOutlined />
                                </button>
                            </div>
                            <div className="w-full py-5">
                                {

                                    <>
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//heylink.me/rohitrai0311/" className="w-full bg-white flex justify-between items-center">
                                            <span>
                                                <FacebookFilled />  Share on Facebook
                                            </span>
                                            <span>
                                                <RightOutlined />
                                            </span>
                                        </a>
                                    </>

                                }
                            </div>
                        </div>
                    </>
                )
            }
            <section className="w-full">
                <div className="container mx-auto">
                    <div className="lg:w-1/2 w-full lg:p-0 px-5 mx-auto h-lvh flex items-center">
                        <div className="w-full">
                            <figure className="mb-5">
                                <img src={logo} alt="" className="size-28 object-fill rounded-full  mx-auto" />
                            </figure>
                            <div className="w-full mb-5">
                                <div className="text-center">
                                    <h4 className="lg:text-2xl text-lg text-white font-bold">Goa Games</h4>
                                </div>
                            </div>
                            <div className="w-full">
                                {
                                    ['Register', 'Login'].map((itm) => (
                                        <>
                                            <a target='_blank' href='https://goagame.com/#/register?invitationCode=338222694474' className="form-group block mb-4 rounded-md bg-white p-2">
                                                <div className="flex justify-between items-center">
                                                    <div className="w-1/2">
                                                        <div className="w-full flex items-center gap-3">
                                                            <img src={logo} alt="" className="size-16 object-fill rounded-full " />
                                                            <h4 className="text-primary lg:text-xl font-[400]">Gaogames {itm}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <div className="w-full text-end">
                                                            <button className='p-3 text-primary font-[400] text-2xl'>
                                                                <ShareAltOutlined />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
