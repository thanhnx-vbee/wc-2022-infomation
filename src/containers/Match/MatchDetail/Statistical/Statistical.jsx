import React, { useState, useEffect } from 'react';
import getMatchStatistical from '@src/apis/matchStatistical';

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
    <div>
      {away.map((awayTeam) => (
        <div>{awayTeam}</div>
      ))}
      {home.map((homeTeam) => (
        <div>{homeTeam}</div>
      ))}
    </div>
  );
};

export default Statistical;
