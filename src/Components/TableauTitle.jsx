import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const TableauTitle = () => {
  return (
    <div>
      <h2 className="text-[24px] font-bold text-gray-700 border-b">
        Ingredients
      </h2>
      <div className="flex flex-row items-center gap-2 py-4 text-gray-600">
        <span>Serving:</span>
        <FaMinus />
        <span>4</span>
        <FaPlus />
      </div>
    </div>
  )
}

export default TableauTitle
