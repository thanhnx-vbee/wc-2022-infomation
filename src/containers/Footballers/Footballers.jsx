import React, { useState, useEffect } from 'react';
import getFootballer from '@src/apis/fooballers';
import { FootballerStyle } from './index.style';

const Footballers = () => {
  const [footballer, setFootballer] = useState([]);

  const fetchData = async () => {
    const data = await getFootballer();
    setFootballer(Object.values(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FootballerStyle>
      {footballer.map((player) => (
        <div className="players">{player.playerName}</div>
      ))}
    </FootballerStyle>
  );
};

export default Footballers;
