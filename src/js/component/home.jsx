import React, { useState } from "react";

//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");
    const [hasPurple, setHasPurple] = useState(false);

    const toggleColor = () => {
        const colors = ["red", "yellow", "green", ...(hasPurple ? ["purple"] : [])];
        const currentIndex = colors.indexOf(selectedColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        setSelectedColor(colors[nextIndex]);
    };

    const addPurple = () => {
        setHasPurple(true);
    };

    return (
        <div>
            <div className="traffic-light">
                <div 
                    onClick={() => setSelectedColor("red")} 
                    className={"Light red" + (selectedColor === "red" ? " glow" : "")}
                ></div>
                <div 
                    onClick={() => setSelectedColor("yellow")} 
                    className={"Light yellow" + (selectedColor === "yellow" ? " glow" : "")}
                ></div>
                <div 
                    onClick={() => setSelectedColor("green")} 
                    className={"Light green" + (selectedColor === "green" ? " glow" : "")}
                ></div>
                {hasPurple && (
                    <div 
                        onClick={() => setSelectedColor("purple")} 
                        className={"Light purple" + (selectedColor === "purple" ? " glow" : "")}
                    ></div>
                )}
            </div>
            <button onClick={toggleColor}>Toggle Color</button>
            <button onClick={addPurple}>Add Purple</button>
        </div>
    );
};

export default Home;
