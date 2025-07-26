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
    <div className="flex flex-col md:flex-row justify-center item-center md:space-x-8 md:space-y-0 space-y-6 px-4 py-10">
    {/* the carousel box itself */}
        <div className="carousel-outer w-[250px] h-[250px] md:h-[300px] md:w-[300] overflow-hidden bg-gray-100">
            {/* ease-cubic-bezier controls how fast the item transitions from the prev to curr and to next */}
            <div className="carousel-inner flex transition-all duration-3000 ease-[cubic-bezier(0.31,0.575,0.565,1)]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item flex min-w-full h-full justify-center items-center">
                        <h1 className="text-lg font-semibold">
                            Newsletter {item}
                        </h1>
                    </div>))}
            </div>
        </div>

        {/* Text content on the right (or below on mobile) */}
        <div className="text-center md:text-left max-w-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-2">Recent Newsletter Carousel</h2>
            <p className="text-black text-sm">dynamically changes every 3 seconds</p>
        </div>
    </div>

  );
}

export default Carousel;