import { useState, useEffect } from "react";


function Carousel() {

  const data = [1, 2, 3, 4]

  const [currentIndex, setCurrentIndex] = useState(0);

  //create function to to do the rotation

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  };


  //useEffect () =>  

  useEffect(() => {
    const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)

    return () => clearInterval(interval)
  })

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 md:space-y-0 space-y-6 px-4 py-10">
    {/* the carousel box itself */}
        <div className="carousel-outer w-full md:w-1/2 h-[250px] md:h-[300px] overflow-hidden bg-sky-50 border border-blue-200 rounded-xl shadow">
            {/* ease-cubic-bezier controls how fast the item transitions from the prev to curr and to next */}
            <div className="carousel-inner flex transition-all duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item min-w-full h-full flex items-center justify-center">
                        <h1 className="text-lg font-semibold text-blue-800">
                            Newsletter {item}
                        </h1>
                    </div>
                ))}
            </div>
        </div>

        {/* Text content on the right (or below on mobile) */}
        <div className="text-center md:text-left max-w-sm md:border-l md:border-blue-200 md:pl-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">Recent Newsletter Carousel</h2>
            <p className="text-blue-700 text-sm">dynamically changes every 3 seconds</p>
        </div>
    </div>

  );
}

export default Carousel;