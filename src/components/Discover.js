import React from "react";
import Button from "./Button";

const Discover = () => {
    return (
        <div className="flex flex-col w-full h-56 bg-blueGreen mt-24 text-center justify-center">
            <h3 className="text-white text-3xl md:text-4xl font-roboto font-bold px-4">
                Guys Mentorship Network
            </h3>
            <p className="text-white text-base md:text-2xl pt-4">
                To know more about us
            </p>
            <Button
                text={"Discover More"}
                bg={"bg-white"}
                color={"text-blueGreen"}
                hoverBg={"bg-green"}
                hoverColor={"text-white"}
                className={`card-button mt-4`}
            />
        </div>
    );
};

export default Discover;
