import React from "react";
import styled from "styled-components";


const SearchInputWrapper = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #dfe1e5;
  padding: 2px;
  border-radius: 20px;
  height: 2em;
  width: 50%;
  transition: box-shadow 0.25s ease-out, border-color 0.25s ease-out;
  &:hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }
  @media (max-width: 767px) {
    width: 300px;
  }
`;

const StyledInput = styled.input`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  flex-grow: 2;
  padding: 0 1em 0 1em;
  border: none
  font-size: 0.75em;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #444;
  &:focus {
    outline: inherit;
  }
`;

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="search"
        />
        <StyledButton>
          <i className="fa fa-search fa-2x" />
        </StyledButton>
      </InputWrapper>
    </SearchInputWrapper>
  );
};
export {SearchInput}
