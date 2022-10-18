import React from "react";
import Button from "./Button";

const Carousel = () => {
    // return (
    //     <div className="carousel-container relative mx-auto">
    //         <div className="slide min-w-full">
    //             <img className="min-w-full" src="./images/slide1.jpg" alt="" />
    //         </div>
    //         {/* <div className="slide min-w-full">
    //             <img className="min-w-full" src="./images/slide2.jpg" alt="" />
    //         </div>
    //         <div className="slide min-w-full">
    //             <img className="min-w-full" src="./images/slide3.jpg" alt="" />
    //         </div> */}
    //         <div className="buttons relative">
    //             <button className="absolute left-0">
    //                 <img src="./images/prev.png" alt="" />
    //             </button>
    //             <button className="absolute right-0">
    //                 <img src="./images/next.png" alt="" />
    //             </button>
    //         </div>
    //     </div>
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
