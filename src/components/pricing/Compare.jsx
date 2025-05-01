import React from 'react'
import check from '../../assets/images/pricing/check.svg'
import { compare, plans } from '../../assets/data/data'

const Compare = () => {
  return (
    <div className='my-20 px-2 sm:px-5 md:px-10 lg:px-24'>
      <h1 className='text-3xl font-semibold mx-auto w-fit'>COMPARE</h1>
      {
        compare.map((feature, index) => (
          <div key={index} className={`sm:flex sm:gap-5 sm:items-center max-w-3xl mx-auto text-sm font-semibold ${index === 0 ? "mt-16" : "mt-5"}`} >
            <div className="flex flex-col gap-5">
              {index === 0 && <p>THE FEATURES</p>}
              <p>{feature.label}</p>
            </div>
            <div className="flex gap-10 sm:gap-16 mt-5 sm:mt-0 sm:ml-auto">
                {
                  plans.map((plan) => (
                    <div key={plan} className="flex flex-col sm:items-center gap-2 sm:gap-5">
                      <p className={`${index === 0 ? 'sm:block' : 'sm:hidden'}`}>{plan}</p>
                      <p
                        className={`sm:flex sm:w-[${
                        plan === "BASIC"
                          ? "44px"
                          : plan === "PRO"
                          ? "30.3px"
                          : "71.5px"
                        }]`}
                      >
                        {feature.values[plan] && (
                        <img src={check} alt="check icon" className="sm:mx-auto" />
                        )}
                      </p>
                    </div>
                  ))
                }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Compare;