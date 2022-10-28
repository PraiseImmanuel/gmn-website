import React from "react";
import Button from "./Button";

const Nav = () => {
    return (
        <nav className="fixed z-20 min-w-full bg-white border-solid border-b-2 top-0 py-3 lg:py-0">
            <div className="relative container  px-2 mx-10 md:mx-auto  transition ease-in-out">
                {/* flexbox */}
                <div className="flex items-center justify-between space-x-4">
                    {/* logo */}
                    <div className="logo w-24 md:w-36">
                        <img src="./images/gmn-logo.png" alt="" />
                    </div>
                    {/* Menu Items */}
                    <ul className=" hidden space-x-8 lg:flex lg:justify-center">
                        <li className="py-5 navigation-link">
                            <a className="text-black font-medium" href="/">
                                Home
                            </a>
                        </li>
                        <li className="py-5 navigation-link">
                            <a className="text-black font-medium" href="/">
                                About Us
                            </a>
                        </li>
                        <li className="py-5 navigation-link">
                            <a className="text-black font-medium" href="/">
                                Get Involved
                            </a>
                        </li>
                        <li className="py-5 navigation-link">
                            <a className="text-black font-medium" href="/">
                                Events/Activities
                            </a>
                        </li>
                        <li className="py-5 navigation-link">
                            <a className="text-black font-medium" href="/">
                                Gallery
                            </a>
                        </li>
                    </ul>
                    {/* donate button */}
                    <div>
                        <Button
                            text={"Donate Now"}
                            bg={"bg-blueGreen"}
                            color={"text-white"}
                            hoverBg={"bg-green"}
                            hoverColor={"text-white"}
                            className={`hidden lg:block`}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
