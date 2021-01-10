import React from 'react';
import styled from 'styled-components';

const StyledTd = styled.td`
  border: 1px solid black;
  height: 50px;
  width: 50px;
  text-align: center;
`;
const Keypad = ({ enterShot }) => {
  const handleClick = (event) => {
    enterShot(event.target.textContents);
  };

  return (
    <div align='center'>
      <table>
        <tbody onClick={handleClick}>
          <tr>
            <StyledTd>0</StyledTd>
            <StyledTd>1</StyledTd>
            <StyledTd>2</StyledTd>
          </tr>
          <tr>
            <StyledTd>3</StyledTd>
            <StyledTd>4</StyledTd>
            <StyledTd>5</StyledTd>
          </tr>
          <tr>
            <StyledTd>6</StyledTd>
            <StyledTd>7</StyledTd>
            <StyledTd>8</StyledTd>
          </tr>
          <tr>
            <StyledTd>9</StyledTd>
            <StyledTd>10</StyledTd>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Keypad;
