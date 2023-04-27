import React from 'react';
import Greeksalad from "../assets/greek-salad.webp"
import Bruschetta from "../assets/bruschetta.jpeg"
import Lemondesert from "../assets/lemon-dessert.webp"

export default function Menu() {
    return (
        <div>
        <h1 className='font-bold text-5xl text-center mt-5 mb-5 text-primary-yellow' > Weekly Specials!</h1>
        <div className='flex flex-wrap flex-row justify-center '>
        <div className="max-w-md rounded overflow-hidden shadow-lg px-5">
            <a href="/"><img className='h-60 w-full object-cover mt-2' src={Greeksalad} alt="Salad" /></a>
        <div className="px-6 py-4  flex flex-wrap flex-col'">
            <div className="font-bold text-xl mb-2 mr-12">Greek Salad</div>
            <div class="font-bold text-xl mb-2 ml-12">12.99$</div>
        <div>
                <p className="text-gray-700 text-1xl"> The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <button className='bg-primary-yellow w-[200px] rounded-full font-medium text-2xl my-6 mx-auto py-3 text-highlight-dark'>Order online</button>
        </div>
        </div>
         </div>

         <div className="max-w-md rounded overflow-hidden shadow-lg px-5">
            <a href="/"><img className='h-60 w-full object-cover mt-2' src={Bruschetta} alt="Salad" /></a>
        <div className="px-6 py-4  flex flex-wrap flex-col'">
            <div className="font-bold text-xl mb-2 mr-12">Bruschetta</div>
            <div class="font-bold text-xl mb-2 ml-12">16.99$</div>
        <div>
                <p className="text-gray-700 text-1xl"> Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil. </p>
                <button className='bg-primary-yellow w-[200px] rounded-full font-medium text-2xl my-6 mx-auto py-3 text-highlight-dark'>Order online</button>
        </div>
        </div>
         </div>

         <div className="max-w-md rounded overflow-hidden shadow-lg px-5">
            <a href="/"><img className='h-60 w-full object-cover mt-2' src={Lemondesert} alt="Salad" /></a>
        <div className="px-6 py-4  flex flex-wrap flex-col'">
            <div className="font-bold text-xl mb-2 mr-12">Lemon Dessert</div>
            <div class="font-bold text-xl mb-2 ml-12">8.99$</div>
        <div>
                <p className="text-gray-700 text-1xl"> Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest. </p>
                <button className='bg-primary-yellow w-[200px] rounded-full font-medium text-2xl my-6 mx-auto py-3 text-highlight-dark'>Order online</button>
        </div>
        </div>
         </div>
        </div>
        </div>
    )
  }
  

  