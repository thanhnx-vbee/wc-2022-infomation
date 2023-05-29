import React from 'react';
import {
  Wrapper,
  Logo,
  SubItem,
  MenuItem,
  Avatar,
  SelectList,
} from './index.style';
import LogoImg from '../img/Slice_9.png';
import AvatarImg from '../img/thu_1.png';

const TopNav = () => {
  const [value, setValue] = React.useState('en');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <div className="appBar">
        <div className="toolbar">
          <div className="headLogo">
            <Logo src={LogoImg} />
          </div>
          <div className="listItem">
            <SubItem exact to="/">
              MATCH
            </SubItem>
            <SubItem to="/footballers">FOOTBALLERS</SubItem>
            <SubItem to="/statistics">STATISTICS</SubItem>
            <SubItem to="/ranks">RANKS</SubItem>
          </div>
          <div className="headRight">
            <SelectList value={value} onChange={handleChange}>
              <MenuItem value="en" selected="selected">
                ENGLISH(UK)
              </MenuItem>
              <MenuItem value="vi">VIETNAMESE</MenuItem>
            </SelectList>
            <Avatar src={AvatarImg} variant="rounded" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopNav;
