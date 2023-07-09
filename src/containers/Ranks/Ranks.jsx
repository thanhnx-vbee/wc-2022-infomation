import React, { useState, useEffect } from 'react';
import getRankList from '@src/apis/rankApi';
import { RankStyle } from './index.style';

const Ranks = () => {
  const [ranks, setRanks] = useState([]);

  const fetchData = async () => {
    const data = await getRankList();
    setRanks(Object.values(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RankStyle>
      {ranks.map((rank) => (
        <div>{rank.group}</div>
      ))}
    </RankStyle>
  );
};

export default Ranks;
