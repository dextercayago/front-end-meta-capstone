import React from 'react';
import Karen from "../assets/karen-nelson.png"
import Jess from "../assets/jese-leos.png"
import Joseph from "../assets/joseph-mcfall.png"
import Roberta from "../assets/roberta-casas.png"

export default function Testimonials() {
    return (
        <div>
        <h1 className='font-bold text-5xl text-center mt-5 mb-5 text-primary-yellow' > Testimonials</h1>
<div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
<figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Best customer service!</h3>
        <p className="my-4">Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment"</p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
        <img className="rounded-full w-9 h-9" src={Karen} alt="karen picture"/>
        <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Bonnie Green</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
        </div>
    </figcaption>    
</figure>
<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Best Food in the area</h3>
        <p className="my-4">WOW!!! What an outstanding dinner you prepared at Little Lemon on Friday evening!!! It was an honor for me to be invited and experience firsthand your incredible culinary gift!"</p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
        <img className="rounded-full w-9 h-9" src={Jess} alt="jesss picture" />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Roberta Casas</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
        </div>
    </figcaption>    
</figure>
<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Great bang for the buck</h3>
        <p className="my-4">Thanks again this year for having our wedding anniversary at your fine restaurant last Monday evening. The food, service, ambience were all superb!!! On behalf of us all, fight on!"</p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
        <img className="rounded-full w-9 h-9" src={Joseph} alt="joseph picture" />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
        </div>
    </figcaption>    
</figure>
<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">You'll never regret eating here.</h3>
        <p className="my-4">Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
        <img className="rounded-full w-9 h-9" src={Roberta} alt="roberta picture"/>
        <div className ="space-y-0.5 font-medium dark:text-white text-left">
            <div>Joseph McFall</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
        </div>
    </figcaption>    
</figure>
</div>

    </div>
    )
  }
  

  