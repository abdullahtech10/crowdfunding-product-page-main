import { useState } from "react"

function Selection({ selection, setSelection, setIsModalOpen, setIsCompletionOpen }) {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(min) {
    const value = Number(amount)

    if (!value) {
      setError('please Enter a pledge amount')
      return
    }

    if (value < min) {
      setError(`minimum plegde is ${min}`)
      return
    }

    //validation passes
    setIsCompletionOpen(true)
    setIsModalOpen(false)

    // setError('')
    // alert('pledged', value)
  }


  return (
    <div className="fixed inset-0 bg-[hsl(0,0%,0%,.5)] flex justify-center items-center  z-50  ">

      <div className="w-170 bg-white p-8 rounded-md  max-h-[90vh] z-50 overflow-y-auto overflow-x-hidden max-sm:w-[90%]">
        <div className="flex justify-end mb-4">

          <img src="/assets/images/icon-close-modal.svg" alt="" className="cursor-pointer"
            onClick={() => {
              setIsModalOpen(false)
              setSelection(null) //reset selection
            }} />
        </div>

        <h3 className="font-bold text-[18px] mb-4">Back this project</h3>
        <p className="text-Gray-500"> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

        {/* no reward section */}

        <div className={`rounded-md shadow-[hsl(0,0%,48%,.5)] shadow-sm p-8 my-4 flex items-start gap-4 
              ${selection === 'noReward' ? ' border-2 border-Green-700' : 'border border-[hsl(0,0%,48%,.3)]'}`}>
          <input
            type="radio"
            name="stand"
            checked={selection === 'noReward'}
            onChange={() => setSelection('noReward')} />
          <div >
            <h3 className="font-bold mb-4">Pledge with no reward</h3>
            <p> Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
          </div>
        </div>

          {/* bamboo section */}
        <section className={`  rounded-md shadow-[hsl(0,0%,48%,.5)] shadow-sm py-8 mb-4 
            ${selection === 'bamboo' ? 'border-Green-400 border-2' : 'border border-[hsl(0,0%,48%,.3)]'}`}>

          <div className={`px-8 flex gap-4 items-start  mb-4`} >
            <input
              type="radio"
              name="stand"
              checked={selection === 'bamboo'}
              onChange={() => setSelection('bamboo')} />
            <div >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center max-sm:flex-col max-sm:gap-3 max-sm:items-start">
                  <h3 className="font-bold"> Bamboo Stand</h3>
                  <p className="text-Green-400 font-medium">Pledge $25 or more</p>
                </div>
                <div className="gap-2 flex items-center max-sm:hidden">
                  <h3 className="font-bold">101</h3>
                  <p className="text-Gray-500">left</p>
                </div>
              </div>
              <p className="text-Gray-500">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>

              <div className="gap-2 hidden  items-center max-sm:flex max-sm:mt-3">
                  <h3 className="font-bold">101</h3>
                  <p className="text-Gray-500">left</p>
                </div>
            </div>
          </div>

          {/* <!-- Selected pledge start --> */}
          {selection === 'bamboo' && (

            <div className="flex justify-between items-center px-8 border-t border-[hsl(0,0%,48%,.3)]  pt-4 max-sm:flex-col max-sm:gap-4">
              <p className="text-Gray-500 "> Enter your pledge</p>

              <div>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value)
                      setError('') //it clear error while typing

                    }}
                    placeholder="$"
                    className="border-2 w-25 py-1 text-center border-Gray-500 rounded-full font-bold placeholder:text-Gray-500 outline-none max-sm:w-[50%]" />
                  <button className="bg-Green-400 px-4 py-2 rounded-full text-white font-medium cursor-pointer hover:bg-Green-700 max-sm:w-[50%]"
                    onClick={() =>{
                      handleSubmit(25)
                      
                    } }
                  >Continue</button>
                </div>

                {error && <p className="text-red-500 text-[14px] font-medium mt-2 text-right">{error}</p>}

              </div>
            </div>
          )}
        </section>

          {/* black section  */}
        <section className={`  rounded-md shadow-[hsl(0,0%,48%,.5)] shadow-sm py-8 mb-4 
          ${selection === 'black' ? 'border-Green-700 border-2' : 'border border-[hsl(0,0%,48%,.3)]'}
            `}>

          <div className="px-8 flex gap-4 items-start  mb-4">
            <input
              type="radio"
              name="stand"
              checked={selection === 'black'}
              onChange={() => setSelection('black')} />
            <div >
              <div className="flex justify-between items-start mb-4 ">
                <div className="flex gap-3 items-center max-sm:flex-col max-sm:gap-2">
                  <h3 className="font-bold"> Black Edition Stand</h3>
                  <p className="text-Green-400 font-medium">Pledge $75 or more</p>
                </div>
                <div className="gap-2 flex items-center max-sm:hidden">
                  <h3 className="font-bold">64</h3>
                  <p className="text-Gray-500">left</p>
                </div>
              </div>
              <p className="text-Gray-500">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
              <div className="gap-2 hidden items-center max-sm:flex max-sm:mt-3">
                  <h3 className="font-bold">64</h3>
                  <p className="text-Gray-500">left</p>
                </div>
            </div>
          </div>


          {/* <!-- Selected pledge start --> */}
          {selection === 'black' && (

            <div className="flex justify-between items-center px-8 border-t border-[hsl(0,0%,48%,.3)]  pt-4 transition duration-1000 ease-in-out max-sm:flex-col max-sm:gap-4 ">
              <p className="text-Gray-500 "> Enter your pledge</p>
              <div>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e)=>{
                      setAmount(e.target.value)
                      setError('')
                    }}
                    placeholder="$"
                    className="border-2 w-25 py-1 text-center border-Gray-500 rounded-full font-bold placeholder:text-Gray-500 outline-none" />
                  <button className="bg-Green-400 px-4 py-2 rounded-full text-white font-medium cursor-pointer"
                  onClick={()=>{
                    handleSubmit(75)
                    
                  }}>Continue</button>
                </div>
                {error && <p className="text-red-500 text-[14px] font-medium mt-2"> {error}</p>}
              </div>
            </div>
          )}
        </section>


          {/* mahogamy section  */}
        <section className="border border-[hsl(0,0%,48%,.3)]  rounded-md shadow-[hsl(0,0%,48%,.5)] shadow-sm py-8 mb-4 opacity-50">

          <div className="px-8 flex gap-4 items-start ">
            <input type="radio" name="stand" />
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <h3 className="font-bold">  Mahogany Special Edition</h3>
                  <p className="text-Green-400 font-medium">Pledge $200 or more</p>
                </div>
                <div className="gap-2 flex items-center">
                  <h3 className="font-bold">0</h3>
                  <p className="text-Gray-500">left</p>
                </div>
              </div>
              <p className="text-Gray-500">  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
            </div>
          </div>

          {/* <!-- Selected pledge start --> */}
          {/* <div className="flex justify-between items-center px-8 border-t border-[hsl(0,0%,48%,.3)]  pt-4">
              <p className="text-Gray-500 "> Enter your pledge</p>

              <div className="flex gap-4">
                <input 
                type="text" 
                name=""  
                placeholder="$75"
                className="border-2 w-25 py-1 text-center border-Gray-500 rounded-full font-bold placeholder:text-Black outline-none" />
                <button className="bg-Green-400 px-4 py-2 rounded-full text-white font-medium cursor-pointer">Continue</button>
              </div>
            </div> */}
        </section>

      </div>

    </div>
  )
}

export default Selection