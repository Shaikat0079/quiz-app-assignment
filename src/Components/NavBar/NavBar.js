import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

{/* <nav className='text-2xl text-rose-600'><Link to='/topics'>Topics</Link></nav> */ }
{/* <nav className='text-2xl text-rose-600'><Link to='/statistics'>Statics</Link></nav> */ }
{/* <nav className='text-2xl text-rose-600'><Link to='/blog'>Blog</Link></nav> */ }



export default function NavBar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-rose-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link className='text-4xl md:text-6xl text-white' to='/'>JS QUIZ APP</Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <Bars3BottomRightIcon className="h-6 w-6 text-white" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto m-2">
                            <li className="nav-item mx-4">
                                <Link className='text-white text-2xl' to='/topics'>Topics</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className='text-white text-2xl' to='/statistics'>Statistics</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className='text-white text-2xl' to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}