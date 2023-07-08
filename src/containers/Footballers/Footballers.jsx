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
        <div className="players">
          <a href={player.information}>
            <div className="playerInfor">
              <img
                src={player.playerPicture}
                alt="/"
                className="playerPicture"
              />
              <p className="name">{player.playerName}</p>
            </div>
            <div className="position">{player.position}</div>
            <div className="nation">
              <img src={player.nationImage} alt="/" className="nationImage" />
              <p className="location">{player.nation}</p>
            </div>
          </a>
        </div>
      ))}
    </FootballerStyle>
  );
};

export default Footballers;
