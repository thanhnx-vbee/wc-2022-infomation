import styled from 'styled-components';

const FooterStyle = styled.div`
  height: 100px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  .footerLeft {
    flex: 1;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    margin-left: 50px;
    .footerLeftContent {
      margin: 0px 0px 0px 25px;
    }
  }
  .footerContent {
    flex: 2;
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin-right: 30px;
  }
  .footerRight {
    display: flex;
    flex: 6;
    font-weight: 300;
    font-size: 16px;
    margin-right: 50px;
  }
`;

const LogoFooter = styled.img`
  weight: auto;
  height: 40px;
`;

export { FooterStyle, LogoFooter };
