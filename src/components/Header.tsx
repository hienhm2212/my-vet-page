import React from 'react'
import Button from './button';



const Header = () => {
  return (
    <header className="background-color: #ffffff; min-height: calc(100vh - 6rem);">
    <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
      <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800">
        Huynh Nhu Vet Clinic
      </h1>
      <div className="max-w-xl mx-auto">
        <p className="mt-10 text-gray-500 text-center text-xl lg:text-3xl">
          Kindness when needed the most.
        </p>
      </div>
      <div className="font-mono mt-10 flex justify-center items-center w-full mx-auto">
        <Button primary>Book Appointment</Button>
        <span className="mx-2">or</span>
        <Button>Contact us</Button>
      </div>
    </div>
  </header>
  )
}

export default Header;