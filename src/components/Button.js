import React from "react";

const Button = ({ bg, color, hoverBg, hoverColor, text, className }) => {
    return (
        <button
            className={`${className} py-2 px-7 text-sm transition ease-in-out font-bold rounded-full sm:text-base ${bg} ${color} hover-${hoverBg} hover-${hoverColor}`}
        >
            {text}
        </button>
    );
};

export default Button;
