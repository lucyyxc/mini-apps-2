import React from 'react';
import styled from 'styled-components';

const StyledTd = styled.td`
  border: 1px solid black;
`;

const Scorecard = ({ shotScores, frameScores }) => {
  return (
    <div>
      <h2 align='center'>Scorecard:</h2>
      <table bordercolor='black' align='center' border='2'>
        <tbody>
          <tr>
            <td align='middle'>1</td>
            <td align='middle'>2</td>
            <td align='middle'>3</td>
            <td align='middle'>4</td>
            <td align='middle'>5</td>
            <td align='middle'>6</td>
            <td align='middle'>7</td>
            <td align='middle'>8</td>
            <td align='middle'>9</td>
            <td align='middle'>10</td>
          </tr>
          <tr>
            {shotScores.map((frame, index) => {
              return (
                <td align='right' key={index}>
                  <table cellPadding='10'>
                    <tbody>
                      <tr align='top'>
                        <td>
                          {/* first shot of frame score */}
                          {frame[0]}
                        </td>
                        <StyledTd>
                          {/* second shot of frame score */}
                          {frame[1]}
                        </StyledTd>
                        {/* Frame 10: potential bonus 3rd shot if strike in first shot or spare in second */}
                        {index === 9 ? <StyledTd> {frame[2]} </StyledTd> : null}
                      </tr>
                    </tbody>
                  </table>
                </td>
              );
            })}
          </tr>
          <tr height='30'>
            {frameScores.map((frameScore, index) => (
              <td align='right' key={index}>
                {/* total points in frame */}
                {frameScore}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scorecard;
