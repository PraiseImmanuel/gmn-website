import React from "react";
import Card from "./Card";

const CardHolder = () => {
    return (
        <div className=" flex flex-col justify-center items-center lg:items-stretch lg:space-x-4 lg:flex-row">
            <Card
                imgSrc={"./images/slide1.jpg"}
                heading={"Get Involved"}
                content={
                    "Mentor a boy child offers a helping hand with the transition from childhood to adulthood."
                }
            />

            <Card
                imgSrc={"./images/slide1.jpg"}
                heading={"Would you like to donate"}
                content={
                    "We all have dreams in life, but it takes good planning, goals and certain values and mentality to reach those goals. Help us help a boy child make better life decisions."
                }
            />

            <Card
                imgSrc={"./images/slide1.jpg"}
                heading={"Upcoming Event"}
                content={
                    "Goals and certain values and mentality to reach those goals. Help us help a boy child make better life decisions."
                }
            />
        </div>
    );
};

export default CardHolder;
