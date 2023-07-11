import styled from 'styled-components';

const RankStyle = styled.div`
  margin-top: 60px;
  justify-content: center;
  margin-bottom: 30px;
  .center {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .component {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      .title {
        align-items: center;
        margin: 0.5em;
        justify-content: center;
        font-weight: 900;
        font-size: 20px;
      }
      .table {
        font-weight: 600;
        background-color: #d9d9d9;
        align-items: center;
        border-radius: 1em;
        margin-left: 2em;
        .header {
          display: flex;
          align-items: baseline;
          border-bottom: 2px solid #fff;
          .td {
            justify-content: center;
            padding: 0.5em;
            display: flex;
            align-items: center;
            width: 3vw;
          }
          .first {
            margin-left: 0.5em;
          }
          .teamName {
            width: 6vw;
          }
        }
        .tr {
          align-items: center;
          display: flex;
          border-bottom: 1px solid #fff;
          .td {
            padding: 0.5em;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3vw;
            margin-top: 0;
            .img {
              margin-top: 0.5em;
            }
          }
          .first {
            margin-left: 0.5em;
          }
          .teamName {
            width: 6vw;
          }
        }
      }
    }
  }
`;

export { RankStyle };
