import React, { useEffect, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";
import Button from "./Button";

const Carousel = () => {
    const slides = [
        "./images/slide1.jpg",
        "./images/slide2.jpg",
        "./images/slide3.jpg",
    ];
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [displayIndex, setDisplayIndex] = useState(0);

    // const indicatorColor = (slideIndex) => {
    //     if (slideIndex === currentIndex) return "bg-gray-800";
    //     return "bg-gray-400";
    // };

    // const goToSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex);
    // };

    // const previousSlide = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // };

    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // };

    // const showSlide = () => {
    //     let newIndex = 1;
    //     if (newIndex > slides.length) {
    //         newIndex = 1;
    //     }
    //     setDisplayIndex(newIndex - 1);
    //     setCurrentIndex(displayIndex);
    //     setTimeout(() => {
    //         setDisplayIndex(newIndex++);
    //     }, 2000);
    // };

    // useEffect(() => {
    //     showSlide();
    // }, [displayIndex]);
    // return (
    //     <div className="carousel-container mt-14 md:mt-0 relative mx-auto">
    //         <div className="slide min-w-full">
    //             <img
    //                 className="carousel-img min-w-full"
    //                 src={slides[currentIndex]}
    //                 alt=""
    //             />
    //         </div>
    //         {/* <div className="slide min-w-full">
    //             <img className="min-w-full" src="./images/slide2.jpg" alt="" />
    //         </div>
    //         <div className="slide min-w-full">
    //             <img className="min-w-full" src="./images/slide3.jpg" alt="" />
    //         </div> */}
    //         <div className="buttons w-full">
    //             <button
    //                 className="absolute w-5 sm:w-8 md:w-10 top-1/2 left-2 -mt-5"
    //                 onClick={() => previousSlide()}
    //             >
    //                 <img src="./images/prev.png" alt="" className="w-10" />
    //             </button>
    //             <button
    //                 className="absolute w-5 sm:w-8 md:w-10 top-1/2 right-2 -mt-5"
    //                 onClick={() => nextSlide()}
    //             >
    //                 <img src="./images/next.png" alt="" className="w-10" />
    //             </button>
    //         </div>

    //         <div className="indicators absolute ml-2 flex space-x-2 md:space-x-3">
    //             {slides.map((slide, slideIndex) => (
    //                 <div
    //                     key={slideIndex}
    //                     className={`indicator w-5 md:w-8 h-1 ${indicatorColor(
    //                         slideIndex
    //                     )}`}
    //                     onClick={() => goToSlide(slideIndex)}
    //                 ></div>
    //             ))}
    //         </div>
    //     </div>
    // );

    const height = window.innerWidth < 768 ? "424px" : "700px";
    return (
        <HeroSlider
            slideAnimation="left_to_right"
            autoplay
            orientation="horizontal"
            intial-slide={1}
            style={{
                backgroundColor: "rgba(0,0,0,0.33)",
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 50,
                shouldAutoPlay: true,
                autoplayDuration: 300,
            }}
            height={height}
        >
            <Slide
                background={{
                    backgroundImageSrc: "./images/slide1.jpg",
                    backgroundAttachment: "fixed",
                    backgroundImageClassName: "slide-img",
                }}
            />

            <Slide
                background={{
                    backgroundImageSrc: "./images/slide2.jpg",
                    backgroundAttachment: "fixed",
                    backgroundImageClassName: "slide-img",
                }}
            />

            <Slide
                background={{
                    backgroundImageSrc: "./images/slide3.jpg",
                    backgroundAttachment: "fixed",
                    backgroundImageClassName: "slide-img",
                }}
            />
        </HeroSlider>
    );
};

export default Carousel;
