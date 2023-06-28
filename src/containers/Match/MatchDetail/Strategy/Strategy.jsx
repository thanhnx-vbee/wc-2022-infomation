import React, { useState, useEffect } from 'react';
import getMatchStrategy from '@src/apis/matchStrategy';
import { StrategyStyle } from './index.style';

const Strategy = ({ matchId }) => {
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);

  const fetchData = async () => {
    const data = await getMatchStrategy(matchId);
    setAway(data.awayTeam);
    setHome(data.homeTeam);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StrategyStyle>
      <div className="stratery">
        <p className="title">ĐỘI HÌNH RA SÂN</p>
        <div className="matchStrategy">
          <div className="match">{away.teamName}</div>
        </div>
        <div className="matchStrategy">
          <div className="match">{home.teamName}</div>
        </div>
      </div>
    </StrategyStyle>
  );
};

export default Strategy;
