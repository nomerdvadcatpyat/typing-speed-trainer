import CountUpTimerContainer from "./CountUpTimer/CountUpTimerContainer";
import TextComponentContainer from "./TextComponent/TextComponentContainer";
import InputComponent from "./InputComponent/InputComponentContainer";
import KeyboardComponentContainer from "./KeyboardComponent/KeyboardComponentContainer";
import React from "react";
import './TypingState.scss'
import MediaQuery from "react-responsive/src";

export const TypingStatePage = ({ hasError, className }) => {
    return (
      <div className={`typing-state-container ${className}`}>
          <CountUpTimerContainer className="typing-state-container__count-up-timer" />
          <TextComponentContainer className="typing-state-container__text-container" hasError={hasError} />
          <InputComponent className="typing-state-container__input" hasError={hasError} />
          <MediaQuery minWidth={790}>
            <KeyboardComponentContainer className="typing-state-container__keyboard" hasError={hasError} />
          </MediaQuery>
      </div>
    );
}