import styled from 'styled-components';

const StrategyStyle = styled.div`
  display: flex;
  justify-content: center;
  .stratery {
    .title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      justify-content: center;
    }
    .matchStrategy {
      padding: 0.5em;
      width: 60vw;
      border: 2px solid #000;
      align-items: center;
      .teams {
        width: 60vw;
        display: flex;
        justify-content: space-between;
        .homeTeam,
        .awayTeam {
          display: flex;
          justify-content: space-between;
          width: 27vw;
          align-items: center;
          .team {
            display: flex;
            img {
              height: 30px;
              width: auto;
              margin: 0 0.5em;
            }
            p {
              font-weight: 600;
              font-size: 20px;
              margin: 0;
            }
            .title {
              color: #a1435f;
            }
          }
        }
        .awayTeam_1 {
          display: flex;
          justify-content: flex-end;
          .team {
            display: flex;
            img {
              height: 30px;
              width: auto;
              margin: 0 0.5em;
            }
            p {
              font-weight: 600;
              font-size: 20px;
              margin: 0em 0.5em;
            }
            .title {
              color: #a1435f;
            }
          }
        }
      }
      .content {
        display: flex;
        width: 60vw;
        justify-content: space-between;
        .teams {
          flex-direction: column !important;
          width: 27vw;
          .playersTeam {
            .players {
              display: flex;
              justify-content: space-between;
              width: 27vw;
              align-items: center;
              flex-decoration: column;
              .player {
                display: flex;
                img {
                  height: 40px;
                  width: auto;
                  margin: 0 0.5em;
                }
                p {
                  font-weight: 600;
                  font-size: 20px;
                  margin: 0;
                  margin: 0em 0.5em;
                }
                a {
                  text-decoration: none;
                  font-weight: 600;
                  font-size: 20px;
                  margin: 0em 0.5em;
                  color: #4d565c;
                }
              }
            }
          }
          .playersTeam_1 {
            .players {
              display: flex;
              justify-content: flex-end;
              width: 27vw;
              align-items: center;
              flex-decoration: column;
              .player {
                display: flex;
                img {
                  height: 40px;
                  width: auto;
                  margin: 0 0.5em;
                }
                p {
                  font-weight: 600;
                  font-size: 20px;
                  margin: 0em 0.5em;
                }
                a {
                  text-decoration: none;
                  font-weight: 600;
                  font-size: 20px;
                  margin: 0em 0.5em;
                  color: #4d565c;
                }
              }
            }
          }
        }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    justify-content: center;
  }
  .stratery {
    .matchStrategy {
      .match {
      }
    }
  }
`;

export { StrategyStyle };
