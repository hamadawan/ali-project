import React from 'react'

const Button = (props) => {
  return (
    <button className=" primary-button self-center text-white text-lg md:text-[21px]  md:whitespace-nowrap px-20 py-5 rounded-l-full rounded-r-full bg-gradient-to-l from-cyan-300 to-cyan-500">{props.text}</button>

  )
}

export default Button