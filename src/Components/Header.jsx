import { useState } from "react"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header() {

    const [viewMenu, setViewMenu] = useState(false)

    return (

        <div className='w-full p-4 fixed top-0 left-0  z-50 bg-white'>

          
            <div className='flex flex-row justify-between items-center'>

                <div className='font-bold text-[#24286B] text-2xl'>LOGO</div>

                <button 
                    onClick={() => setViewMenu(!viewMenu)} 
                    className="text-2xl md:hidden"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className='flex flex-row justify-between items-center gap-3 max-md:hidden'>
                    <a href="#home" className="text-black hover:text-[#24286B] hover:underline text-sm px-4 py-2">HOME</a>
                    <a href="#abt" className="text-black hover:[#24286B] hover:underline text-sm px-4 py-2">ABOUT US</a>
                    <a href="#why" className="text-black hover:text-[#24286B] hover:underline text-sm px-4 py-2">OUR SERVICE</a>
                    <a href="#pro" className="text-black hover:text-[#24286B] hover:underline text-sm px-4 py-2">OUR PROJECTS</a>
                    <a href="#test" className="text-black hover:text-[#24286B] hover:underline text-sm px-4 py-2">TESTIMONIALS</a>
                    <a href="#contact" className='bg-[#24286B] text-center text-white rounded-full text-sm p-1 hover:bg-[#4950d5]'>
                        CONTACT US
                    </a>
                </div>

            </div>

            
            {viewMenu && (
                <div className="flex flex-col items-center justify-center gap-3 mt-4 md:hidden">
                    <a href="#home" className="nav-link">HOME</a>
                    <a href="#abt" className="nav-link">ABOUT US</a>
                    <a href="#why" className="nav-link">OUR SERVICE</a>
                    <a href="#pro" className="nav-link">OUR PROJECTS</a>
                    <a href="#test" className="nav-link">TESTIMONIALS</a>

                    <a href="#contact" className="bg-[#24286B] text-center text-white rounded-full px-4 py-2 text-sm w-full">
                        CONTACT US
                    </a>
                </div>
            )}

        </div>
    )
}


export default Header























