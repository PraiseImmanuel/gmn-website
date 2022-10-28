import React from "react";
import Button from "./Button";

const Card = ({ imgSrc, heading, content }) => {
    return (
        <div className="flex flex-col container mt-2 w-full lg:w-1/4 bg-blueGreen lg:pt-2 pb-4 lg:-mt-4 relative">
            <h3 className="heading font-roboto text-white text-xl md:text-2xl  text-center py-6">
                {heading}
            </h3>
            <div className="image">
                <img src={imgSrc} alt="" className="w-full" />
            </div>
            <div className="px-4 pb-4 flex flex-col">
                <p className="content text-white text-center pt-4">{content}</p>
                <Button
                    className={`card-button mt-4`}
                    bg={"bg-white"}
                    color={"text-blueGreen"}
                    hoverBg={"bg-green"}
                    hoverColor={"text-white"}
                    text={"Discover More"}
                />
            </div>
        </div>
    );
};

export default Card;
