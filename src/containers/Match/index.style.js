import styled from 'styled-components';

const MatchStyle = styled.div`
  margin-top: 80px;
  .matchComponent {
    width: 1500px;
    margin-left: 180px;
    .dateTime {
      font-size: 20px;
      font-weight: 900;
      padding: 0px 10px;
      border-left: 3px solid #09ae3e;
      margin-bottom: 5px;
      &:hover {
        cursor: pointer;
      }
    }

    .matches {
      display: flex;
      flex-decoration: row;
      animation: fadeIn 5s;
      margin-top: 10px;
      .match {
        width: 350px;
        height: 200px;
        background-color: #d9d9d9;
        border-radius: 20px;
        margin-left: 25px;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .subMatch {
        border-radius: 10px;
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
          display: flex;
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

      .result {
        display: flex;
        float: right;
        margin-right: 15px;
        margin-top: 8px;
        .video {
          color: #000;
          font-weight: 900;
          text-decoration: none;
          padding: 3px 15px;
          background-color: #fccd54;
          border-radius: 10px;
          &:hover {
            color: #000;
            background-color: #ccc;
          }
          &.active {
            background-color: #000;
            color: #fff;
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
