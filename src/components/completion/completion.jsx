function Completion({setIsCompletionOpen}) {
    return (
        <div className="fixed inset-0 bg-[hsl(0,0%,0%,.5)] flex justify-center items-center  z-50 ">
            <div className="w-120 bg-white p-8 rounded-md text-center max-sm:w-[90%]">
                {/* <!-- Success modal start --> */}
                <img src="/assets/images/icon-check.svg" alt="" className="mx-auto w-15 mb-4"/>

                <h1 className="font-bold mb-3">Thanks for your support!</h1>
                <p className="text-Gray-500 mb-3">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>

                <button 
                className="bg-Green-400 py-2 px-5 text-white font-semibold rounded-full cursor-pointer hover:bg-Green-700" 
                onClick={()=> setIsCompletionOpen(false)}>Got it!</button>

                
                
                

                {/* <!-- Success modal end --> */}

            </div>
        </div>
    )
}

export default Completion