import styled from 'styled-components';

const MatchStyle = styled.div`
  --hover: #000;
  margin-top: 80px;
  .matchComponent {
    width: 100vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    .dateTime {
      margin-left: 1.2em;
      display: flex;
      flex-direction: flex-start;
      font-size: 20px;
      font-weight: 900;
      padding: 0 0 0 1em;
      border-left: 3px solid #09ae3e;
      margin-bottom: 1em;
      &:hover {
        cursor: pointer;
      }
    }

    .matches {
      display: flex;
      width: 100vw;
      justify-content: flex-start;
      margin-top: 1em;
      .match {
        width: 22vw;
        height: 30vh;
        background-color: #d9d9d9;
        border-radius: 20px;
        margin-left: 25px;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .subMatch {
        border-radius: 1em;
        justify-content: center;
        width: 100%;
        .title {
          height: 40px;
          display: flex;
          justify-content: center;
          text-align: center;
          margin-top: 0px;
          background-color: #000;
          justify-content: center;
          width: 50%;
          margin-left: 25%;
          margin-bottom: 10px;
          p {
            font-size: 18px;
            margin-top: 5px;
            text-align: center;
            color: #fff;
            font-weight: 900;
          }
        }
        .info {
          width: 100%;
          justify-content: space-between;
          text-align: center;
          height: 97px;
          flex-decoration: column;
          border-bottom: 3px dashed #000;
          .twoTeam {
            display: flex;
            width: 100%;
            margin-left: 5px;
            .team {
              margin: 5px;
              width: 40%;
              .name {
                margin-top: 4px;
                font-size: 16px;
                font-weight: 700;
              }
            }
            .dateTable {
              display: flex;
              width: 30%;
              flex-decoration: column;
              .column {
                justify-content: center;
                text-align: center;
                .table {
                  justify-content: center;
                  text-align: center;
                  display: flex;
                  font-size: 25px;
                  font-weight: 900;
                  color: #09ae3e;
                }
                .highLight {
                  text-align: center;
                  justify-content: center;
                  display: flex;
                  color: red;
                  font-size: 14px;
                  width: auto;
                  height: 24px;
                }
              }
            }
          }
        }
      }

      .button {
        display: flex;
        float: right;
        .createButton {
          background-color: #ffcd08;
          padding: 0.2em 1em;
          border-radius: 1em;
          cursor: pointer;
          margin: 0.9em 1em 0 0;
          cursor: pointer;
          p {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
          }
          &:focus {
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
          }
          &:hover {
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
            background-color: #09ae3e;
            p {
              color: #fff;
            }
          }
        }
      }
    }
    input:checked + .matches {
      transition-duration: '0.2s';
      display: none;
    }
  }
  @keyframe fadeIn {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(100%);
    }
  }
`;

const Image = styled.img`
  height: 50px;
  weight: auto;
  border-radius: 5px;
`;

export { MatchStyle, Image };
