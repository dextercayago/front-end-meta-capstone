import { Link } from "react-router-dom"
export default function Hero() {

    return (
      <div className='text-white'>
      <div className=' mt-[15px] w-full h-[450px] mx-auto text-center flex flex-col justify-center bg-primary-gray'>
        <h1 className='md:text-10xl sm:text-8xl text-7xl font-bold text-primary-yellow '>
          Little Lemon
        </h1>
        <h2 className='md:text-7xl sm:text-5xl text-4xl font-normal text-white '>
          Little Rock
        </h2>
        <p className='md:text-3xl sm:text-2.5xl text-2xl text-[#cce4dc] font-normal md:px-20 sm:px-18 px:17'>
        Located in Little Rock Arkansas, little lemon provides you with the most you with the best dishes around the world, with the option to order online or reserve a table Little lemon is the best place for your most delicious needs!
        </p>

        <Link to="/booking" >
        <button className='bg-primary-yellow w-[200px] rounded-full font-medium text-2xl my-6 mx-auto py-3 text-highlight-dark'>Reserve a table</button>
        </Link>
      </div>
    </div>
    )
  }
  

  