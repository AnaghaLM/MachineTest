

function WhyUs() {
  return (
    <div className="my-2 px-6 md:px-16" id="why">


      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center ">


        <div className="flex flex-col gap-6 ">

          <div className="bg-[#24286B] text-white rounded-2xl p-8 text-start">
            <h2 className="text-3xl font-semibold  mt-28">
              Why <br /> Choose Us!
            </h2>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8  space-y-2">
            <img src="./Group3.png" />
            <h3 className="font-semibold text-lg mb-3">
              End-to-End Expertise
            </h3>
            <p className="text-gray-600">
              From interior fit-outs to MEP and civil works, we offer fully
              integrated solutions under one roof.
            </p>
          </div>

        </div>


        <div className="flex justify-center p-8 ">
          <img
            src="/Image.png"
            alt="Why Choose Us"

          />
        </div>


        <div className="flex flex-col gap-6">

          <div className="bg-gray-100 rounded-2xl p-8 ">
            <img src="Group 7.png" alt="" />
            <h3 className="font-semibold text-lg mb-3">
              Client-Centric Approach
            </h3>
            <p className="text-gray-600">

              Every project is customized to align with your vision, goals, and functionality requirements.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 h-62.5">
            <img src="Group 5.png" alt="" />
            <h3 className="font-semibold text-lg mb-3">
              Uncompromising Quality
            </h3>
            <p className="text-gray-600">

              We use premium materials and proven techniques to ensure durability, safety, and long-term performance.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default WhyUs;