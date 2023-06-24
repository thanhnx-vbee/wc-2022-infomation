import styled from 'styled-components';

const MatchDetailStyle = styled.div`
  --hover: #09ae3e;
  margin-top: 3.5em;
  display: flex;
  justify-content: center;
  .container {
    width: 80vw;
    height: auto;
    background-color: #d9d9d9;
    .title {
      margin-top: 0.5em;
      height: 40px;
      display: flex;
      text-align: center;
      align-items: center;
      margin-bottom: 0.5m;
      font-weight: 700;
      justify-content: space-between;
      .titleLeft {
        display: flex;
        .wc {
          color: #a1435f;
          padding: 0 0 0 2em;
        }
      }
      .titleRight {
        display: flex;
        color: #a1435f;
        padding: 0 2em 0 0;
      }
    }
    .teams {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #ccc;
      padding: 0.5em 0 0.5em 0;
      .team {
        justify-content: center;
        align-items: center;
        img {
          display: flex;
          border-radius: 1em;
        }
        a {
          margin-left: 3.5em;
          text-align: center;
          display: flex;
          text-decoration: none;
          cursor: pointer;
          font-size: 25px;
        }
      }
      .score {
        width: 20vw;
        align-items: center;
        font-size: 30px;
        font-weight: 900;
        margin-top: 1em;
        .matchScore {
          display: flex;
          justify-content: space-between;
        }
        .penaltyScore {
          margin-left: 4em;
          width: 10vw;
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          color: #a1435f;
        }
      }
    }
    .goals {
      display: flex;
      justify-content: space-between;
      width: 63vw;
      margin-left: 5em;
      padding: 0.5em 0 0.5em 0;
      .goalRight {
        float: right;
        justify-content: flex-end;
      }
      .goal {
        margin-left: 7em;
      }
    }
    .stadium {
      display: flex;
      justify-content: center;
      margin-bottom: 1em;
      a {
        text-decoration: none;
      }
    }
    .video {
      a {
        cursor: pointer;
        text-decoration: none;
        img {
          width: 80vw;
          height: auto;
        }
        .time {
          width: 80vw;
          height: 60px;
          left: 146px;
          position: absolute;
          bottom: -430px;
          background-color: rgba(9, 9, 20, 0.6);
          align-items: center;
          display: flex;
          .icon {
            width: 30px;
            height: 30px;
            padding: 0 0.5em 0 1em;
          }
          span {
            color: #fff;
          }
        }
      }
    }
    .changes {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: auto;
      margin-top: -0.5em;
      color: #fff;
      .container {
        cursor: pointer;
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 0px 16px;
        font-size: 20px;
        font-weight: 700;
        height: 100%;
        background-color: #000;
        text-decoration: none;
        div {
          margin: 0.625em 0em;
          display: flex;
          align-items: center;
          p {
            cursor: pointer;
            color: #fff;
          }
        }
        &.active {
          display: flex;
          align-items: center;
          padding: 0px 16px;
          font-size: 20px;
          font-weight: 700;
          height: 100%;
          background-color: #09ae3e;
          text-decoration: none;
          div {
            p {
              color: #fff;
            }
          }
          &:focus {
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
          }
          &:hover {
            background-color: #000;
            box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
            transform: translateY(-0.25em);
          }
        }
        &:focus {
          box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
          transform: translateY(-0.25em);
        }
        &:hover {
          box-shadow: 0 0.5em 0.5em -0.2em var(--hover);
          transform: translateY(-0.25em);
          p {
            color: #fff;
          }
        }
      }
    }
  }
`;

export { MatchDetailStyle };
