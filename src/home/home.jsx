import { useState } from "react"
import Header from "../components/header/header"
import Selection from "../components/selection/selection"
import Completion from "../components/completion/completion"

function Home(){
    
    const [bookmark, setBookmark] = useState(false)
    const [selection, setSelection] = useState(null)
    const [isModalOpen, setIsModalOpen]= useState(false)
    const [isCompletionOpen, setIsCompletionOpen] = useState(false)

    return(
        <div className="container">
          <Header/>

          {/* mastercraft bamboo master section */}

          <section className="relative w-170 mx-auto text-center bg-white shadow-md rounded-md px-8 pb-8 -top-17.5 
          max-sm:w-[90%]">
            <img src="/assets/images/logo-mastercraft.svg" alt="" className=" absolute -top-7.5 transform left-1/2 -translate-x-1/2 pb-5"/>
            <h1 className="pt-8 font-bold text-2xl pb-1.5">Mastercraft Bamboo Monitor Riser</h1>
            <p className="text-Gray-500 mb-4 ">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className="flex justify-between items-center">
                <button 
                onClick={()=> setIsModalOpen(true)}
                className="bg-Green-400 p-2 px-3 text-white font-medium rounded-full max-sm:w-[70%] hover:bg-Green-700"> Back this project</button>

                <button 
                className={`flex gap-2.5 items-center  pr-2 max-sm:pr-0 rounded-full font-bold cursor-pointer
                    ${bookmark ? 'bg-[hsl(176,50%,47%,.1)] text-Green-700 ' : 'bg-[hsl(0,0%,48%,.2)] text-Black'}
                    

                    `}
                onClick={() => setBookmark(prev => !prev)}>
                    {bookmark ?  <img src="/assets/images/icon-bookmark-active.svg" alt="" /> :  <img src="/assets/images/icon-bookmark.svg" alt="" width={'40px'}/>}

                    {bookmark ? <span className="opacity-75 text-Green-700 max-sm:hidden">Bookmarked</span> : <span className="opacity-75 max-sm:hidden">Bookmark </span> }
                </button>
            </div>
          </section>

          <section className="w-170 mx-auto bg-white shadow-md rounded-md p-8 -mt-12 max-sm:w-[90%]">
            <div className="flex justify-start items-center gap-8 max-sm:flex-col">
                <div className="w-40 border-r border-[hsl(0,0%,48%,.2)] max-sm:border-b max-sm:border-r-0 max-sm:pb-2 max-sm:text-center max-sm:w-35">
                    <h2 className="text-2xl font-bold">$89,914</h2>
                    <span className="text-Gray-500 text-[14px]">of $100,000 backed</span>
                </div>
                <div className="w-40 border-r border-[hsl(0,0%,48%,.2)] max-sm:border-b max-sm:border-r-0 max-sm:pb-2 max-sm:text-center max-sm:w-35">
                    <h2 className="text-2xl font-bold"> 5,007</h2>
                    <span className="text-Gray-500 text-[14px]">total backers</span>
                </div>
                <div className="w-40 max-sm:text-center max-sm:w-35">
                    <h2 className="text-2xl font-bold">56</h2>
                    <span className="text-Gray-500 text-[14px]">days left</span>
                </div>
            </div>

            <div className="mt-6 bg-[hsl(0,0%,48%,.2)] w-full rounded-full overflow-hidden h-2.5">
                <div className="w-[70%] h-full bg-Green-400 "></div>
            </div>

          </section>

          {/* about this project section */}

          <section className="w-170 max-sm:w-[90%] mx-auto bg-white shadow-md rounded-md p-8 mt-4">
            <h3 className="text-[18px] font-bold mb-4"> About this project</h3>
            <p className="leading-7 text-Gray-500 mb-4">  The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p className="leading-7 text-Gray-500 mb-4">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

            {/* bambbo stand */}
            <section className="border border-[hsl(0,0%,48%,.3)]  rounded-md shadow-[hsl(0,0%,48%,.5)] shadow-sm p-8 mb-4">
                <div className="flex justify-between items-center mb-4 max-sm:flex-col   max-sm:items-start">
                    <h3 className="font-bold"> Bamboo Stand</h3>
                    <p className="text-Green-400 ">Pledge $25 or more</p>
                </div>
                <p className="leading-7 text-Gray-500">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>

                <div className="flex justify-between items-center mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">
                   <div className="flex gap-2 items-center">
                    <h2 className="font-bold text-2xl">101</h2>
                    <span className="text-Gray-500 text-[14px]">left</span>
                   </div>
                   <button 
                   onClick={()=>{
                    setSelection('bamboo')
                    setIsModalOpen(true)
                   }}
                   className="bg-Green-400 px-4 py-2 rounded-full text-white font-medium cursor-pointer hover:bg-Green-700">Select Reward</button>
                </div>
            </section>

            {/* black edition stand */}

            <section className="border border-[hsl(0,0%,48%,.3)]  rounded-md shadow-[hsl(0,0%,48%,.5)] shadow-sm p-8 mb-4">
                <div className="flex justify-between items-center mb-4 max-sm:flex-col   max-sm:items-start">
                    <h3 className="font-bold">Black Edition Stand</h3>
                    <p className="text-Green-400 ">Pledge $75 or more</p>
                </div>
                <p className="leading-7 text-Gray-500">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>

                <div className="flex justify-between items-center mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">
                   <div className="flex gap-2 items-center ">
                    <h2 className="font-bold text-2xl">64</h2>
                    <span className="text-Gray-500 text-[14px]">left</span>
                   </div>
                   <button 
                   className="bg-Green-400 px-4 py-2 rounded-full text-white font-medium  hover:bg-Green-700"
                   onClick={() =>{
                    setSelection('black')
                    setIsModalOpen(true)
                   }}>Select Reward</button>
                </div>
            </section>

            {/* mahogamy stand */}
            <section className="border border-[hsl(0,0%,48%,.3)]  rounded-md shadow-[hsl(0,0%,48%,.5)] shadow-sm p-8 opacity-40">
                <div className="flex justify-between items-center mb-4 max-sm:flex-col   max-sm:items-start">
                    <h3 className="font-bold"> Mahogany Special Edition</h3>
                    <p className="text-Green-400 ">Pledge $200 or more</p>
                </div>
                <p className="leading-7 text-Gray-500">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>

                <div className="flex justify-between items-center mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">
                   <div className="flex gap-2 items-center">
                    <h2 className="font-bold text-2xl">0</h2>
                    <span className="text-Gray-500 text-[14px]">left</span>
                   </div>
                   <button className="bg-Gray-500 px-4 py-2 rounded-full text-white font-medium">Out of Stock</button>
                </div>
            </section>
          </section>

          {isModalOpen &&(
              <Selection 
                selection = {selection}
                setSelection = {setSelection}
                setIsModalOpen = {setIsModalOpen}
                setIsCompletionOpen = {setIsCompletionOpen}
                
                />
                
            )}

          {isCompletionOpen && (
              <Completion
              setIsCompletionOpen = {setIsCompletionOpen}
            />
          )}


 
 

                    


        </div>
    )
}
export default Home