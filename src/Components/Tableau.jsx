import React from 'react'

const Tableau = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr className="border-t">
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Metric
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 border-b">
            <th scope="row" className="number">
              1
            </th>
            <td className="py-4">Tomato</td>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">Piece</td>
          </tr>

          <tr className="bg-white border-b">
            <th scope="row" className="number">
              2
            </th>
            <td className="py-4">Chocolate</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">Gram</td>
          </tr>

          <tr className="bg-gray-100 border-b">
            <th scope="row" className="number">
              3
            </th>
            <td className="py-4">Flour</td>
            <td className="px-6 py-4">150</td>
            <td className="px-6 py-4">Gram</td>
          </tr>

          <tr className="bg-white">
            <th scope="row" className="number">
              3
            </th>
            <td className="py-4">Milk</td>
            <td className="px-6 py-4">25</td>
            <td className="px-6 py-4">Cl</td>
          </tr>
        </tbody>
      </table>
      <caption className="flex flex-row text-gray-500 text-sm">
        List of the recipe ingredients
      </caption>
    </div>
  )
}

export default Tableau
