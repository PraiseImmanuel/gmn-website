import React from "react";

const Mission = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:space-x-4 text-center lg:items-stretch mt-16 text-white justify-center">
            <div className="mission w-full sm:w-4/5 lg:w-1/3 p-8 bg-green">
                <h3 className="text-xl font-bold text-white pb-5">
                    Exposure role modelling
                </h3>
                <p>
                    Establishing a safe, supportive and effective process for
                    creating contact with, and exposure to, role models
                    (professional / personal / relatable men) and online or
                    digital tools.
                </p>
            </div>

            <div className="mission w-full sm:w-4/5 lg:w-1/3 p-8 bg-green">
                <h3 className="text-xl font-bold text-white pb-5">
                    Connection and Programme Management
                </h3>
                <p>
                    MABC manages a structured programme for the boys to be
                    upskilled in key thematic areas relevant to their growth,
                    and also matched to a suitable mentor for face-to-face
                    sessions (and remote support where relevant). Our role
                    includes the recruitment, induction and ongoing management
                    support of both mentors and mentees..
                </p>
            </div>
        </div>
    );
};

export default Mission;
