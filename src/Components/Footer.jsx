import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (


    <div className='bg-[#24286B] w-9xl text-white px-6 rounded-t-3xl mx-1 border-4' >


      <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 p-3 text-left '>

        <div>
          <p className='font-bold text-4xl mb-3'>LOGO</p>
          <p>Shaping the UAE’s future <br />
            with precision & passion</p>
        </div>

        <div className='font-light space-y-2' >
          <p className='mb-3  font-semibold'> Useful Links</p>
          <p>Home</p>
          <p >About Us</p>

          <p>Our Services</p>
          <p>Our Projects</p>

          <p>Testimonials</p>




        </div>

        <div className='font-light  space-y-2'>
          <p className='mb-3 font-semibold'>Support</p>
          <p >Privacy policy</p>
          <p >Terms & Conditions</p>
          <p>Contact Us</p>





        </div>

        <div className='font-light'>
          <p className='mb-3  font-semibold'> Find Us</p>
          <p>Bright Hurst Contracting LLC
            <br /> Office No: 1203, Al Shatha Tower,
            <br />Dubai Internet City, Dubai, <br />
            UAE,P.O. Box: 123456</p>


          <div className='mt-2'>
            <p className="font-semibold my-3">Social Media Links</p>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>


          </div>

        </div>

      </div>
      <hr />

      <p className="text-center p-2">@ Bright Hurst 2025  All Rights Reserved</p>

    </div>
  )
}

export default Footer