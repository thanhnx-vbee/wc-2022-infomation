import styled from 'styled-components';

const StatisticalStyle = styled.div`
  display: flex;
  justify-content: center;
  .statistical {
    font-size: 20px;
    margin-bottom: 2em;
    .title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      justify-content: center;
    }
    .matchStatistical {
      display: flex;
      width: 70vw;
      margin-left: 15em;
      .team {
        width: 20vw;
        p {
          margin: 0;
        }
      }
    }
  }
`;

export { StatisticalStyle };
