import CountUpTimerContainer from "./CountUpTimer/CountUpTimerContainer";
import TextComponentContainer from "./TextComponent/TextComponentContainer";
import InputComponent from "./InputComponent/InputComponentContainer";
import KeyboardComponentContainer from "./KeyboardComponent/KeyboardComponentContainer";
import React from "react";

export const TypingStatePage = props => {
    const { hasError } = props;

    return (
      <>
          <CountUpTimerContainer />
          <TextComponentContainer hasError={hasError} />
          <InputComponent hasError={hasError} />
          <KeyboardComponentContainer hasError={hasError} />
      </>
    );
}