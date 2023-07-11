import React, { useState, useEffect } from 'react';
import getRankList from '@src/apis/ranks';
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
      <div className="center">
        {ranks
          .sort((a, b) => {
            if (a.group < b.group) {
              return -1;
            }
            return 1;
          })
          .map((rank) => (
            <div className="component" key={rank.id}>
              <div className="title">
                <p className="title">GROUP {rank.group}</p>
              </div>
              <div className="table">
                <div className="header">
                  <div className="td first">#</div>
                  <div className="td">Nation</div>
                  <div className="td teamName">Team</div>
                  <div className="td">P</div>
                  <div className="td">W</div>
                  <div className="td">D</div>
                  <div className="td">L</div>
                  <div className="td">GD</div>
                  <div className="td">Pts</div>
                </div>
                {rank.data.map((tr) => (
                  <div className="tr">
                    <div className="td first">{tr.rank}</div>
                    <div className="td">
                      <img
                        src={tr.imgUrl.replace('{format}-{size}', 'sq-1')}
                        alt="/"
                      />
                    </div>
                    <div className="td teamName">{tr.teamName}</div>
                    <div className="td">{tr.pld}</div>
                    <div className="td">{tr.w}</div>
                    <div className="td">{tr.d}</div>
                    <div className="td">{tr.l}</div>
                    <div className="td">{tr.gd}</div>
                    <div className="td">{tr.pts}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </RankStyle>
  );
};

export default Ranks;
