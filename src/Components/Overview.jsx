import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Overview = () => {
  return (
    <section className="mt-2">
      <div>
        <h2 className="text-[24px] font-bold text-gray-700 border-b">
          Overview
        </h2>
      </div>

      <div className="flex flex-row justify-between">
        <div className="m-5 flex flex-col gap-12">
          <div className="flex flex-row gap-[1px] text-gray-600 mt-5">
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
          </div>
          <p className="text-gray-700">Difficulty</p>
        </div>

        <div className="overview !mt-0">
          <p className="rond mt-5">$$</p>
          <p className="text-center mt-0">Cost</p>
        </div>

        <div className="overview">
          <p className="rond m-auto">45 mn</p>
          <p className="text-center">
            Preparation <br /> Time
          </p>
        </div>

        <div className="overview">
          <p className="rond m-auto">0 mn</p>
          <p className="text-center">
            Cooking <br />
            Time
          </p>
        </div>

        <div className="overview">
          <p className="rond m-auto">10 mn</p>
          <p className="text-center">
            Resting <br />
            Time
          </p>
        </div>
      </div>
    </section>
  )
}

export default Overview
