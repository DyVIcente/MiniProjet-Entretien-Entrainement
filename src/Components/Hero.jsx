import React from 'react'

const Hero = () => {
  return (
    <section>
      <img
        src="https://www.duracuire.com/wp-content/uploads/Oeuf-au-plat.jpg"
        alt="plat_image"
        className="h-[250px] w-[100%] object-cover rounded-[5px]"
      />
      <h1 className="text-[28px] font-bold text-gray-700 mt-2">
        French Cookies
      </h1>
      <p className="text-[14px] text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum, id
        asperiores maxime pariatur officiis porro assumenda fugiat rerum beatae
        odio deleniti blanditiis numquam quod corrupti in iure nesciunt quasi.
      </p>
    </section>
  )
}

export default Hero
