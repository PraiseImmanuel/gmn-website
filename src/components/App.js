import React from "react";

import CardHolder from "./CardsHolder";
import Carousel from "./Carousel";
import Mission from "./Mission";
import Nav from "./Nav";
// import "./App.css";

const App = () => {
    return (
        <div>
            <Nav />
            <Carousel />
            <CardHolder />
            <Mission />
        </div>
    );
};

export default App;
