import styled from 'styled-components';

const DevelopmentStyle = styled.div`
  .container {
    text-align: center;
    span {
      font-weight: 600;
      margin-top: 1em;
    }
    .title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      justify-content: center;
    }
  }
  .event {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5em;
    color: #000;
    font-weight: 600;
    .table {
      width: 50vw;
      align-items: center;
      justify-content: center;
      border: 3px solid #000;
      border-radius: 1em;
      .header {
        display: flex;
        border-bottom: 3px solid #000;
        justify-content: space-between;
        height: 2.5em;
        align-items: center;
        .headerLeft {
          display: flex;
          align-items: center;
          height: 2.5em;
          .material-symbols-outlined {
            margin: 0.1em 0 0 1em;
          }
          img {
            margin: 0.1em 0 0 1em;
            width: 20px;
            height: 20px;
          }
          .title {
            display: flex;
            margin: 0 0 0 0.5em;
          }
        }
        .headerRight {
          display: flex;
          font-weight: 600;
          margin-right: 0.5em;
        }
      }
      .contain {
        font-weight: 600;
        .players {
          display: flex;
          justify-content: space-between;
          .player {
            margin: 0 0 0 1em;
            p {
              height: 24px;
              display: flex;
              margin: 0 0.5em 0.5em 0.5em;
              a {
                color: #000;
                text-decoration: none;
              }
              img {
                margin-left: 0.1em;
                width: 2.5em;
                height: 1.5em;
              }
            }
            .titlePlayIn {
              margin: 0.5em 0 0 0.5em;
              color: #09ae3e;
            }
            .titlePlayOut {
              margin: 0.5em 0 0 0.5em;
              color: #a1435f;
            }
          }
        }
      }
    }
  }
`;

export { DevelopmentStyle };
