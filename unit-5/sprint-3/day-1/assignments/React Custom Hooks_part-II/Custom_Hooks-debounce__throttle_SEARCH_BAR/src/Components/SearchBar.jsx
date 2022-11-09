import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useThrottle } from "use-throttle";

const SearchBar = ({ setQuery, suggestions }) => {
  const [activeOption, setActiveOption] = useState(0);
  const scrollRef = useRef();
  const [inputText, SetInputText] = useState("");

  const handleInputTextChange = (e) => {
    SetInputText(e.target.value);
  };

  // useEffect(() => {
  //   setQuery(inputText);
  // }, [inputText, setQuery]);

  const throttleText = useThrottle(inputText, 1000);

  useEffect(() => {
    setQuery(throttleText);
  }, [setQuery, throttleText]);

  const handleActiveSuggections = (e) => {
    console.log(e.keyCode);

    switch (e.keyCode) {
      case 38:
        if (activeOption === 1) {
          scrollRef.current.scrollTop = suggestions.length * 38.8;
          setActiveOption(suggestions.length);
        } else if (activeOption <= suggestions.length - 3) {
          scrollRef.current.scrollTop -= 38.8;
        }
        setActiveOption((prev) => prev - 1);
        break;

      case 40:
        if (activeOption === suggestions.length) {
          scrollRef.current.scrollTop = 0;
          setActiveOption(0);
        } else if (activeOption >= 4) {
          scrollRef.current.scrollTop += 38.8;
        }
        setActiveOption((prev) => prev + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Wrapper onKeyUp={handleActiveSuggections}>
        <SearchBarWrapper>
          <Input value={inputText} onChange={handleInputTextChange} />
        </SearchBarWrapper>
        {!!suggestions.length && (
          <SuggestionsBox active={activeOption} limit={5} ref={scrollRef}>
            {suggestions.map((item, index) => {
              return (
                <div
                  key={index}
                  onMouseOver={() => {
                    setActiveOption(index + 1);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </SuggestionsBox>
        )}
      </Wrapper>
    </div>
  );
};

const SuggestionsBox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: colums;
  max-height: ${({ limit }) => `${limit * 38.8}px`};
  margin: auto;
  overflow: auto;
  & * {
    flex: 1;
    text-align: left;
    padding: 10px;
    padding-left: 30px;
  }

  &: nth-child(${({ active }) => active}) {
    backgroud: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

const SearchBarWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  padding: 5px 10px;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  flex: 1;
`;

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
`;
export default SearchBar;
