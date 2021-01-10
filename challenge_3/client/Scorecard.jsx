import React from 'react';
import styled from 'styled-components';

const Scorecard = () => {
  const StyledTd = styled.td`
    border: 1px solid black;
  `;

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
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td align='right'>
              <table cellpadding='10'>
                <tbody>
                  <tr align='top'>
                    <td>{/* first shot of frame score */}</td>
                    <StyledTd>{/* second shot of frame score */}</StyledTd>
                    <StyledTd>
                      {/* potential bonus shot if strike in first shot or spare in second */}
                    </StyledTd>
                  </tr>
                  <tr height='30'>
                    <td>{/* total points in frame */}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scorecard;
