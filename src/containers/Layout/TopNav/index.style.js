import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  .appBar {
    max-width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    color: #ffffff;
    background-color: #09ae3e;
    .toolbar {
      display: flex;
      justify-content: space-between;
      background-color: #09ae3e;
      height: 60px;
      text-align: center;
      align-items: center;
      .headLogo {
        display: flex;
        .logo {
          height: 40px;
          weight: auto;
          margin-left: 50px;
        }
      }
      .listItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }
      .headRight {
        margin-right: 50px;
        display: flex;
        .selectList {
          margin-top: 7px;
          padding: 0px 3px 5px;
          text-decoration: none !important;
          font-size: 20px;
          font-weight: 700;
          border-top: none;
          border-right: none;
          border-left: none;
          color: #fff;
          font-family: 'Vbee';
          border-bottom: 3px solid #000;
          background-color: #09ae3e;
        }
      }
    }
  }
`;

const SubItem = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  text-decoration: none;
  &:hover {
    color: #000;
    background-color: #ccc;
  }
  &.active {
    background-color: #000;
    color: #fff;
  }
`;

const Logo = styled.img`
  height: 40px;
  weight: auto;
  margin-left: 50px;
`;

const SelectList = styled.select`
  margin-top: 7px;
  padding: 0px 3px 5px;
  text-decoration: none !important;
  font-size: 20px;
  font-weight: 700;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #fff;
  font-family: 'Vbee';
  border-bottom: 3px solid #000;
  background-color: #09ae3e;
`;

const MenuItem = styled.option`
  font-size: 20px;
  padding: 5px 10px;
  text-align: center;
  background-color: #ccc;
  color: #000;
  font-weight: 700;
  list-style: none;
`;

const Avatar = styled.img`
  margin-top: 5px;
  margin-left: 20px;
  border: 1px solid #000;
  border-radius: 6px;
  height: 40px;
  weight: 40px;
`;

export { Wrapper, Logo, SubItem, MenuItem, Avatar, SelectList };
