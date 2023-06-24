/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Wrapper, Logo, MenuItem, Avatar, SelectList } from './index.style';
import LogoImg from '../img/Slice_9.png';
import AvatarImg from '../img/thu_1.png';
import { TABS } from '../../../constants/index';

const TopNav = ({ tab, setTab }) => {
  const [value, setValue] = useState('en');

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
            <div className={`container ${tab === TABS.HOME ? 'active' : null}`}>
              <div
                onClick={() => {
                  setTab(TABS.HOME);
                }}
              >
                MATCH
              </div>
            </div>
            <div
              className={`container ${
                tab === TABS.FOOTBALLERS ? 'active' : null
              }`}
            >
              <div
                onClick={() => {
                  setTab(TABS.FOOTBALLERS);
                }}
              >
                FOOTBALLERS
              </div>
            </div>
            <div
              className={`container ${
                tab === TABS.STATISTICS ? 'active' : null
              }`}
            >
              <div
                className="subItem"
                onClick={() => {
                  setTab(TABS.STATISTICS);
                }}
              >
                STATISTICS
              </div>
            </div>
            <div
              className={`container ${tab === TABS.RANKS ? 'active' : null}`}
            >
              <div
                onClick={() => {
                  setTab(TABS.RANKS);
                }}
              >
                RANKS
              </div>
            </div>
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
