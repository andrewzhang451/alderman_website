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
    <div className="carousel-outer overflow-hidden w-full">
      <div className="carousel-inner flex transition-all duration-1000 ease-[cubic-bezier(0.31,0.575,0.565,1)]" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
        {data.map((item, index) => (
            <h1 className="carousel-item h-[20rem] min-w-full w-full flex items-center justify-center" key={index}> Newsletter{item} </h1>
        ))}
      </div>
    </div>
  );
}

export default Carousel;