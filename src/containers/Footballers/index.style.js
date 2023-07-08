import styled from 'styled-components';

const FootballerStyle = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: baseline;
  align-content: stretch;
  flex-wrap: wrap;
  .players {
    width: 10em;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #ccc;
    height: auto;
    border-radius: 1em;
    margin-right: 1em;
    margin-top: 0;
    margin-bottom: 1em;
    a {
      margin-top: 0;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      color: #000;
      .playerInfor {
        border-radius: 1em;
        .playerPicture {
          width: 10em;
          height: 240px;
        }
        .name {
          margin: 0 1em;
        }
      }
      .position {
        margin-left: 1em;
        margin-bottom: 0.1em;
      }
      .nation {
        display: flex;
        .nationImage {
          width: 3em;
          height: 2em;
          margin-left: 1em;
        }
        .location {
          margin-left: 0.5em;
          margin-top: 0.2em;
        }
      }
    }
  }
`;

export { FootballerStyle };
