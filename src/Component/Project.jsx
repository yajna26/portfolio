import React from 'react';
import CssLayout from '../Assets/Project/CssLayout.PNG';
import GymPage from '../Assets/Project/GymPage.PNG';
import LandingPage from '../Assets/Project/LandingPage.PNG';
import Portfolio from '../Assets/Project/Portfolio.PNG';

const Project = () => {
    const projects = [
        {
            id: 1,
            src: Portfolio

        },
        {
            id: 2,
            src: CssLayout

        },
        {
            id: 3,
            src: GymPage

        },
        {
            id: 4,
            src: LandingPage

        }
    ]

    return (
        <div name="project" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Checkout some of my work right here!</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        projects.map(({ id, src }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project