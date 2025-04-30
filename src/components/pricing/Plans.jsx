import React,{ useState } from 'react'

const Plans = () => {
    const [isYearly, setIsYearly] = useState(false);

    // at the time of development a dollar was 18,61 south african rands 

  return (
    <div className='py-16 px-2 sm:px-5 md:px-10 lg:px-24'>
        <div className="flex gap-3 items-center mx-auto w-fit">
            <span className='text-black font-semibold'>Monthly</span>
            <button
                onClick={() => setIsYearly(!isYearly)}
                className='w-12 h-6 rounded-full p-1 transition duration-500 bg-gray-200 cursor-pointer'
            >
                <div className={`w-4 h-4 rounded-full bg-black shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className='text-black font-semibold'>Yearly</span>
        </div>
        <div className='grid gap-10 mt-14 md:grid-cols-3 md:items-center'>
            <div className='pt-10 pb-12 px-2 flex flex-col sm:px-5 items-center text-center bg-gray-100'>
                <h3 className='text-3xl font-bold'>Basic</h3>
                <p className='text-gray-500 mt-7'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                <strong className='text-2xl mt-7'>{isYearly ? 'R 4 243.08' : 'R 353.59'}</strong>
                <p className='text-gray-500'>{isYearly ? 'per year' : 'per month'}</p>
                <button className='bg-black text-white mt-10 px-20 py-2 text-sm w-fit hover:bg-gray-300 hover:text-black transition duration-500 cursor-pointer'>PICK PLAN</button>
            </div>
            <div className='relative overflow-hidden'>
            <div
                className="absolute top-0 left-0 w-full h-2"
                style={{
                    background: 'linear-gradient(to right, #f7bd93 0%, #f7bd93 20%, rgb(118, 0, 252) 80%, rgb(118, 0, 252) 100%)'
                }}
            />
            <div className='pt-10 pb-12 md:py-20 px-2 flex flex-col sm:px-5 items-center text-center bg-black'>
                <h3 className='text-3xl font-bold text-white'>Pro</h3>
                <p className='text-gray-400 mt-7'>More advanced features available. Recommended for photography veterans and professionals.</p>
                <strong className='text-2xl mt-7 text-white'>{isYearly ? 'R 8 709.48' : 'R 725.79'}</strong>
                <p className='text-gray-400'>{isYearly ? 'per year' : 'per month'}</p>
                <button className='bg-white text-black mt-10 px-20 py-2 text-sm w-fit hover:bg-gray-300 hover:text-black transition duration-500 cursor-pointer'>PICK PLAN</button>
            </div>
            </div>    
            <div className='pt-10 pb-12 px-2 flex flex-col sm:px-5 items-center text-center bg-gray-100'>
                <h3 className='text-3xl font-bold'>Business</h3>
                <p className='text-gray-500 mt-7'>Additional features available such as more detailed metrics. Recommended for business owners. </p>
                <strong className='text-2xl mt-7'>{isYearly ? 'R 22 108.68' : 'R 1 842.39'}</strong>
                <p className='text-gray-500'>{isYearly ? 'per year' : 'per month'}</p>
                <button className='bg-black text-white mt-10 px-20 py-2 text-sm w-fit hover:bg-gray-300 hover:text-black transition duration-500 cursor-pointer'>PICK PLAN</button>
            </div>
        </div>
    </div>
  )
}

export default Plans;