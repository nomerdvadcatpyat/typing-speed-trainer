import StartSameTextButtonContainer from "./StartSameTextButton/StartSameTextButtonContainer";
import React from "react";


export const EndStatePage = props => {
    return (
        <>
            <p> Ваше время: {props.endTime} </p>
            <StartSameTextButtonContainer />
        </>

    );
}