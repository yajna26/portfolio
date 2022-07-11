import React from 'react';
import HeroImg from '../Assets/HeroImg.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a web developer.</h2>
                <p className='text-gray-500 py-4 max-w-md'>I am Yajna Matabudul, a front-end web developer, with one year experience. I graduated SUPINFO International University, with a Bsc Computer science in 2020. My aptness in applications like React, Vue, Tailwind, allows me to share my passion of web-development.
                <br/><br/>This is where I share my experience.</p>
                <div>
                    <Link to = "project" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={20} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImg} alt="Yaj Img" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home