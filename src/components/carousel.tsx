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
    <div className="flex items-center justify-center space-x-8 py-10">
      {/* Carousel box */}
      <div className="carousel-outer w-[300px] h-[300px] overflow-hidden bg-gray-100">
        <div
          className="carousel-inner flex transition-all duration-1000 ease-[cubic-bezier(0.31,0.575,0.565,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="carousel-item min-w-full h-[300px] flex items-center justify-center"
            >
              <h1 className="text-lg font-semibold">Newsletter {item}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Text content on the right */}
      <div className="max-w-sm">
        <h2 className="text-3xl font-semibold text-blue-600 mb-2">Recent Newsletter Carousel</h2>
        <p className="text-black text-sm">dynamically changes every 10 seconds</p>
      </div>
    </div>
  );
}

export default Carousel;