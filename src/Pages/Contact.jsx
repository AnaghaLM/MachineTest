
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <div className="w-full px-6 md:px-14 mt-20" id='contact'>


      <div className="mb-10">
        <p className="text-gray-500 text-sm mb-2">Contact Us</p>
        <h1 className="text-3xl md:text-4xl font-semibold px-18">
          Connect with Bright Hurst
        </h1>
      </div>


      <div className="grid grid-cols-1 rounded-3xl md:grid-cols-3 bg-gray-100  px-20 ">


        <div className="sm:col-span-1 bg-[#24286B] text-white p-10 flex flex-col justify-between rounded-2xl">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              We’re Just a <br /> Message Away
            </h2>

            <div className="space-y-6 text-sm">

              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faPhone} className="mt-1" />
                <div>
                  <p className="font-medium">Call :</p>
                  <p>+971 XXXXXXXXX</p>
                  <p>+971 XXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
                <div>
                  <p className="font-medium">Mail :</p>
                  <p>brighthurst123@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
                <div>
                  <p className="font-medium">Head Office :</p>
                  <p>
                    Bright Hurst Contracting LLC <br />
                    Office No: 1203, Al Shatha Tower <br />
                    Dubai Internet City, Dubai, UAE <br />
                    P.O. Box: 123456
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="col-span-2 p-10">
          <form className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border rounded-lg "
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email ID</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 border rounded-lg"
                  placeholder="Email ID"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Subject</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border rounded-lg "
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                className="w-full mt-2 p-3 border rounded-lg "
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#24286B] text-white px-8 py-3 rounded-full "
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;