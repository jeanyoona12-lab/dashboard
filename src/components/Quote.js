import React from "react";
import quoteData from "../data/quoteData.json";

const Quote = () => {
    const index = Math.floor(Math.random()*quoteData.length);
    const data = quoteData[index];
    return (
        <div className="quotenote">
            {/*          명언        */}
            <div className="quotenote-txt">
                <p>{data.text}</p>
            </div>
        </div>
    );
};

export default Quote;
