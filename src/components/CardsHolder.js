import React from "react";
import Card from "./Card";

const CardHolder = () => {
    return (
        <div className=" flex flex-col relative justify-center items-center lg:items-stretch lg:space-x-4 lg:flex-row z-10 mx-5">
            <Card
                imgSrc={"./images/getinvolved.jpg"}
                heading={"Get Involved"}
                content={
                    "Guys mentorship network reaches out to young males, and equips them with life skills and values to become total men."
                }
                bgColor={"bg-bronze"}
                buttonText={"Discover more"}
                buttonColor={"text-bronze"}
            />

            <Card
                imgSrc={"./images/donate.jpg"}
                heading={"Would you like to donate"}
                content={
                    "Young boys need to gain emotional and social support to build them on their path in life. Help us raise total men on whose sholder the nation can rise."
                }
                bgColor={"bg-blueGreen"}
                buttonText={"Discover more"}
                buttonColor={"text-blueGreen"}
            />

            <Card
                imgSrc={"./images/bmc.jpg"}
                heading={"Upcoming Event"}
                content={
                    "Boys Mentorship Conference is an annual event where we reach out to a thousand boys to be taught, mentored and transformed into societally healthy boys."
                }
                bgColor={"bg-bronze"}
                buttonText={"Learn more"}
                buttonColor={"text-bronze"}
            />
        </div>
    );
};

export default CardHolder;
