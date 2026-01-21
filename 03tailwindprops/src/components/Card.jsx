import React from 'react'

function Card({name, btnText="Message" }) {
    // console.log(name)
  return (
     <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-amber-200 mt-4 rounded">
        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s" alt="" />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-2xl font-bold text-black">{name}</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            {/* {btnText || "Message"} */}
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default Card
