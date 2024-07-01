// import React from 'react'
import { ShareAltOutlined } from '@ant-design/icons'
import logo from './assets/logo.png'
const Home = () => {

    return (
        <>

            <section className="w-full">
                <div className="container mx-auto">
                    <div className="lg:w-1/2 w-full lg:p-0 px-5 mx-auto h-lvh lg:overflow-auto overflow-hidden flex items-center">
                        <div className="w-full lg:mt-0 -mt-20">
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
                                                    <div className="lg:w-1/2 w-3/4">
                                                        <div className="w-full flex items-center gap-3">
                                                            <img src={logo} alt="" className="size-16 object-fill rounded-full " />
                                                            <h4 className="text-primary lg:text-xl font-[400] text-md text-nowrap"> {itm} Gaogames</h4>
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-1/2 w-1/4">
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
