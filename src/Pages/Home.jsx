import React from 'react'
import { Tableau, TableauTitle, Overview, Hero } from '../Components'

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <TableauTitle />
      <Tableau />
    </div>
  )
}

export default Home
