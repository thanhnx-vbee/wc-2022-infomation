import React, { useState, useEffect } from 'react';
import getMatchStatistical from '@src/apis/matchStatistical';
import { StatisticalStyle } from './index.style';

const Statistical = ({ matchId }) => {
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);

  const fetchData = async () => {
    const data = await getMatchStatistical(matchId);
    setAway(data.propertiesAwayTeam);
    setHome(data.propertiesHomeTeam);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StatisticalStyle>
      <div className="statistical">
        <p className="title">SỐ LIỆU THỐNG KÊ</p>
        <div className="matchStatistical">
          <div className="team">
            {home.map((homeTeam) => (
              <div>{homeTeam[1]}</div>
            ))}
          </div>
          <div className="team">
            <p>Tỉ lệ kiểm soát trận đấu</p>
            <p>Số bàn thắng</p>
            <p>Số bàn thua</p>
            <p>Hỗ trợ</p>
            <p>Số lần tấn công khung thành</p>
            <p>Số lần tấn công trúng đích</p>
            <p>Số lần truyền bóng</p>
            <p>Số thẻ vàng</p>
            <p>Số thẻ đỏ</p>
            <p>Phạm lỗi</p>
            <p>Liệt vị</p>
          </div>
          <div className="team">
            {away.map((awayTeam) => (
              <div>{awayTeam[1]}</div>
            ))}
          </div>
        </div>
      </div>
    </StatisticalStyle>
  );
};

export default Statistical;
