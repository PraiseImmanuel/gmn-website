import React from "react";

import CardHolder from "./CardsHolder";
import Carousel from "./Carousel";
import Discover from "./Discover";
import Mission from "./Mission";
import Nav from "./Nav";
import Footer from "./Footer";
// import "./App.css";

const App = () => {
    return (
        <div>
            <Nav />
            <Carousel />
            <CardHolder />
            <Mission />
            <Discover />
            <Footer />
        </div>
    );
};

export default App;
