function About() {
  return (
    <div className=" max-sm:mb-20 container mx-auto px-4 py-16 mb-12 " id='abt'>

      <h6 className="text-gray-500">
        About Us
      </h6>

      <h2 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl mb-8">
        Building Excellence, Delivering Trust
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">


        <div>
          <p>
            Bright Hurst Contracting LLC is a leading interior fit-out,
            electro-mechanical, and civil contracting company based in the UAE.
            With a strong commitment to quality, innovation, and integrity,
            we bring client visions to life through expert craftsmanship and project excellence.
            Founded with the vision to redefine industry standards, we pride ourselves
            on delivering complex projects on time, on budget, and beyond expectations.
          </p>
        </div>

        <div>
          <img
            src="/Work.png"
            alt="Construction"

          />
        </div>


        <div className="flex flex-col gap-6">

          <div className="px-4 py-6 bg-gray-100 ">
            <p className="font-semibold mb-2">MISSION</p>
            <p>
              To deliver premium-quality construction and interior solutions
              with precision and professionalism.
            </p>
          </div>

          <div className="px-4 py-6 bg-gray-100 ">
            <p className="font-semibold mb-2">VISION</p>
            <p>
              To be one of the most trusted and respected contracting
              companies in the UAE.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About