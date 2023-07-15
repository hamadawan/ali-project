import * as React from 'react';

const PrimaryButton = ({ children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };
  return <button
    onClick={handleClick}
    className="primary-button self-center text-white text-lg md:text-[21px] md:whitespace-nowrap px-20 py-5 rounded-l-full rounded-r-full bg-gradient-to-l from-cyan-300 to-cyan-500">
    { children }
  </button>;
};

export default PrimaryButton;
