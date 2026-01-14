import { useState } from "react"
import { Link } from "react-router-dom"

function Header(){
const [open, setOpen] = useState(false)

    return(
        <div className="bg-[url('/assets/images/image-hero-desktop.jpg')] min-h-[50vh] bg-cover max-sm:bg-[url('/assets/images/image-hero-mobile.jpg')]">
            <nav className=" flex justify-between items-center px-[8%] pt-4">
                <div className="max-sm:z-50">
                    <img src="/assets/images/logo.svg" alt="" className=""/>
                </div>
                <div className={`flex gap-3 text-white font-medium max-sm:flex-col max-sm:fixed max-sm:w-[85%] max-sm:bg-white max-sm:text-Black max-sm:top-0 max-sm:mx-auto  max-sm:mt-18 max-sm:rounded-md max-sm:shadow-lg max-sm:transition-all max-sm:duration-1500 max-sm:ease-in-out max-sm:z-50
                  ${open ? 'max-sm:left-0 max-sm:right-0' : '-right-full'}  
                    `}>
                    <Link 
                    onClick={()=> setOpen(false)}
                    className="py-4 max-sm:border-b border-[hsl(0,0%,48%,.4)] max-sm:pl-4 max-sm:text-[20px] max-sm:font-semibold">About</Link>
                    <Link 
                        onClick={()=> setOpen(false)}
                    className="py-4 max-sm:border-b border-[hsl(0,0%,48%,.4)] max-sm:pl-4 max-sm:text-[20px] max-sm:font-semibold ">Discover</Link>
                    <Link 
                    onClick={()=> setOpen(false)}
                    className="py-4  max-sm:pl-4 max-sm:text-[20px] max-sm:font-semibold ">Get Started</Link>
                </div>

                <button className="hidden max-sm:inline-block z-50"
                onClick={()=>setOpen(prev => !prev)}
                >
                    {open ? <img src="assets/images/icon-close-menu.svg" /> : <img src="assets/images/icon-hamburger.svg"/>}
                </button>
                <div className={` hidden inset-0 bg-[hsl(0,0%,0%,.5)] fixed  z-40 transition ease-in-out ${open ? "max-sm:block" : ''} `}></div>

            </nav>
               
  
  
        </div>
    )
}

export default Header