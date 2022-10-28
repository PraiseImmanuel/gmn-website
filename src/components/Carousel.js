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
    // return (
    //     <HeroSlider
    //         slideAnimation="left_to_right"
    //         orientation="horizontal"
    //         intial-slide={1}
    //         style={{
    //             backgroundColor: "rgba(0,0,0,0.33)",
    //         }}
    //         settings={{
    //             slidingDuration: 250,
    //             slidingDelay: 100,
    //             shouldAutoPlay: true,
    //             autoplayDuration: 5000,
    //             height: "100vh",
    //         }}
    //     >
    //         <Slide
    //             background={{
    //                 backgroundImage: "./images/slide1.jpg",
    //                 backgroundAttachment: "fixed",
    //             }}
    //         />

    //         <Slide
    //             background={{
    //                 backgroundI: "./images/slide2.jpg",
    //                 backgroundAttachment: "fixed",
    //             }}
    //         />

    //         <Slide
    //             background={{
    //                 backgroundImage: "./images/slide3.jpg",
    //                 backgroundAttachment: "fixed",
    //             }}
    //         />
    //     </HeroSlider>
    // );

    return (
        <div
            id="carouselExampleIndicators"
            class="carousel mt-20 slide relative  md:mt-0"
            data-bs-ride="carousel"
        >
            <div className="absolute top-1/3 z-10 md:ml-16  p-3">
                <h1 className="font-roboto text-3xl sm:text-4xl md:text-5xl text-blueGreen font-bold bg-white/[0.5] p-2 px-4 border-b-4">
                    Raising Total Men
                </h1>
                <Button
                    bg={"bg-blueGreen"}
                    color={"text-white"}
                    hoverBg={"bg-green"}
                    text={"Connect with us"}
                />
            </div>
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active float-left w-full">
                    <img
                        src="./images/slide1.jpg"
                        class="block w-full grayscale"
                        alt="Wild Landscape"
                    />
                </div>
                <div class="carousel-item float-left w-full">
                    <img
                        src="./images/slide2.jpg"
                        class="block w-full grayscale"
                        alt="Camera"
                    />
                </div>
                <div class="carousel-item float-left w-full">
                    <img
                        src="./images/slide3.jpg"
                        class="block w-full grayscale"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
