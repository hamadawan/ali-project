import React from 'react'

const StorefrontButton = (props) => {
  return (
    <button className=" primary-button self-center text-white text-lg text-10  md:whitespace-nowrap px-10 py-5 rounded-l-full rounded-r-full bg-gradient-to-l from-cyan-300 to-cyan-500">{props.text}</button>
  )
}

export default StorefrontButton