import React from "react";

const Nav = () => {
    return (
        <nav className="fixed z-20 min-w-full bg-white border-solid border-b-2 top-0">
            <div className="relative container py-3 px-2 mx-10 md:mx-auto  transition ease-in-out ">
                {/* flexbox */}
                <div className="flex items-center justify-between space-x-4">
                    {/* logo */}
                    <div className="logo w-36">
                        <img src="./images/gmn-logo.png" alt="" />
                    </div>
                    {/* Menu Items */}
                    <div className=" hidden space-x-8 lg:flex">
                        <a
                            className="text-black hover:text-blueGreen font-bold"
                            href="/"
                        >
                            Home
                        </a>
                        <a
                            className="text-black hover:text-blueGreen font-bold"
                            href="/"
                        >
                            About Us
                        </a>
                        <a
                            className="text-black hover:text-blueGreen font-bold"
                            href="/"
                        >
                            Get Involved
                        </a>
                        <a
                            className="text-black hover:text-blueGreen font-bold"
                            href="/"
                        >
                            Events/Activities
                        </a>
                        <a
                            className="text-black hover:text-blueGreen font-bold"
                            href="/"
                        >
                            Gallery
                        </a>
                    </div>
                    {/* donate button */}
                    <div>
                        <a
                            href="/"
                            className=" hidden py-3 px-7 font-bold bg-blueGreen text-white hover:bg-green transition ease-in-out lg:block rounded-full"
                        >
                            Donate Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
