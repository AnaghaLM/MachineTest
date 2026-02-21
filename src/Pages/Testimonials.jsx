import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function Testimonials() {

  const testimonials = [
    {
      id: 1,
      text: "We partnered with Bright Hurst for a large-scale commercial project involving MEP and civil works. Their professionalism, technical expertise, and timely execution made them a reliable choice. They handled complex challenges with ease and efficiency.",
      image: "/Ellipse 2.png",
      name: "Mohammed Khalid",
      role: "Project Manager, GulfTech Engineering",

    },
    {
      id: 2,
      text: "Bright Hurst exceeded our expectations in every aspect of the project. Their interior fit-out work was precise, elegant, and truly reflected our vision. The team maintained clear communication and delivered on time without compromising on quality.",

      image: "/sara.png",
      name: "Aisha Rahman",
      role: "Managing Director, Al Noor",

    },
    {
      id: 3,
      text: "From start to finish, Bright Hurst delivered a seamless experience. Their attention to detail and commitment to quality craftsmanship made our residential project stand out. Highly recommended for anyone looking for trusted construction partners in the UAE.",

      image: "/sara2.png",
      name: "Sara Al Farsi",
      role: "Homeowner, Jumeirah Dubai",

    }
  ]
  return (
    <div className='p-15 px-15' id='test'>

      <p className='text-gray-500'>Testimonials</p>

      <h1 className='my-10 text-2xl font-medium sm:text-4xl md:text-5xl'>
        Voices of Trust That Reflect Our<br />
        Commitment and Craftsmanship
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 items-start'>

        {testimonials.map((item, index) => (

          <div key={item.id} className={` p-3 bg-gray-200 shadow-md rounded-3xl ${index % 2 === 0 ? "mt-32" : "mt-16"}`} >

            <p>"{item.text}"</p>

            <div className='flex mt-10 items-center  bg-gray-300 rounded-3xl'>
              <img
                src={item.image}
                alt={item.name}
                className='w-16 h-16 rounded-full object-cover'
              />

              <h1 className='ms-5 font-bold'>
                {item.name}, <br />
                <span className='font-medium'>{item.role}</span>
              </h1>
            </div>
          </div>
        ))}

      </div>

      <div className='flex gap-5 justify-center mt-10 text-2xl'>
        <div className='w-10 h-10 flex items-center justify-center border-2 border-[#24286B] rounded-full '>
          <button>
            <FontAwesomeIcon className='text-[#24286B]' icon={faAngleLeft} />
          </button>
        </div>

        <div className='w-10 h-10 flex items-center justify-center border-2 border-[#24286B] rounded-full'>
          <button>
            <FontAwesomeIcon className='text-[#24286B]' icon={faAngleRight} />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Testimonials