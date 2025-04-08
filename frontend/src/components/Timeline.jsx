import React from "react";

const Timeline = () => {
  return (
        <div className="bg-[#EFDCAB] text-[#443627] py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            {/* Left Section */}
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-[#D98324] uppercase tracking-loose">
                Working Process
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Working Process of Fest
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the process. Follow all the steps to get a
                smooth experience!
              </p>
              <a
                href="#"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent transition-all"
              >
                Explore Now
              </a>
            </div>

            {/* Right Timeline Section */}
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  {/* Timeline Lines */}
                  <div
                    className="border-2 absolute h-full border-yellow-500"
                    style={{
                      right: "50%",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2 absolute h-full border-yellow-500"
                    style={{
                      left: "50%",
                      borderRadius: "1%",
                    }}
                  ></div>

                  {/* Timeline Items */}
                  {[
                    {
                      title: "Meera’s Marriage:",
                      description: [
                        "• Meera, a bright and independent woman, marries Raj, a charming and well-spoken man.",
                        "• The marriage starts off happily, but soon, Raj becomes controlling and possessive."
                      ],
                      alignment: "right"
                    },
                    {
                      title: "The First Signs of Abuse:",
                      description: [
                        "Raj slaps Meera over a minor mistake, promising it won’t happen again.",
                        "Over time, verbal abuse turns into physical violence, and she is isolated from family and friends."
                      ],
                      alignment: "left"
                    },
                    {
                      title: "Feeling Trapped:",
                      description: [
                        "Meera fears society’s judgment and believes she has nowhere to go.",
                        "She suffers in silence, unaware of her legal rights."
                      ],
                      alignment: "right"
                    },
                    {
                      title: "A Ray of Hope:",
                      description: [
                        "One day, her neighbor, Mrs. Sharma, hears her cries and offers support.",
                        "She informs Meera about the Protection of Women from Domestic Violence Act, 2005, and her right to seek protection and residence orders."
                      ],
                      alignment: "left"
                    },
                    {
                      title: "Taking a Stand:",
                      description: [
                        "Encouraged by Mrs. Sharma, Meera contacts a Protection Officer and files a complaint.",
                        "The court grants her a protection order, restraining Raj from approaching her."
                      ],
                      alignment: "right"
                    },
                    {
                      title: "A New Beginning:",
                      description: [
                        "With legal support and counseling, Meera rebuilds her life.",
                        "She joins an NGO to help other women escape domestic violence."
                      ],
                      alignment: "left"
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className={`mb-8 flex justify-between items-center w-full ${
                        event.alignment === "right"
                          ? "flex-row-reverse text-right"
                          : "text-left"
                      }`}
                    >
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4">
                        <p className="mb-3 text-base text-yellow-300">
                          {event.date}
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          {event.title}
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Timeline Image */}
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="timeline"
                />
              </div>
            </div>
          </div>
        </div>

  );
}

export default Timeline;

