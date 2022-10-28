import React from "react";
import Button from "./Button";

const Footer = () => {
    return (
        <footer className="flex justify-center bg-green py-8 text-white text-center md:text-left">
            <div className="flex flex-col md:flex-row md:justify-between footer md:space-x-4 w-full md:w-5/6 lg:4/5 items-center">
                <div className="logo-and-links flex flex-col items-center justify-center md:items-start">
                    {/* logo */}
                    <div className="logo w-36">
                        <img
                            className="mx-auto"
                            src="./images/gmn-logo-white.png"
                            alt=""
                        />
                    </div>
                    {/* links */}
                    <div className="links flex flex-row space-x-4 pt-6 items-center justify-center md:pl-2">
                        <img
                            src="./images/icon-facebook.svg"
                            alt=""
                            className="link"
                        />
                        <img
                            src="./images/icon-instagram.svg"
                            alt=""
                            className="link"
                        />
                        <img
                            src="./images/icon-twitter.svg"
                            alt=""
                            className="link"
                        />
                    </div>
                </div>

                {/* navigation links */}
                <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-12 ml-0">
                    <div className="group-one">
                        <li className="nav-link pt-3 md:pt-0">
                            <a href="/">About</a>
                        </li>

                        <li className="nav-link pt-3">
                            <a href="/">Get Involved</a>
                        </li>
                    </div>
                    <div className="group-two">
                        <li className="nav-link pt-3 md:pt-0">
                            <a href="/">Events</a>
                        </li>
                        <li className="nav-link pt-3">
                            <a href="/">Gallery</a>
                        </li>
                    </div>
                </ul>

                {/* donate button */}

                <div className="donate-and-year">
                    <Button
                        text={"Donate Now"}
                        bg={"bg-blueGreen"}
                        color={"text-white"}
                        hoverBg={"bg-white"}
                        hoverColor={"text-green"}
                        className={"mt-4"}
                    />
                    <p className="pt-3 copyright">
                        @Praise Immanuel All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
