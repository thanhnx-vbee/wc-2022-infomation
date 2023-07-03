/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import getMatchStrategy from '@src/apis/matchStrategy';
import { StrategyStyle } from './index.style';
import Shirt from '../../../Layout/img/ao_bong_da_2.png';

const Strategy = ({ matchId }) => {
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);
  const [homePlayer, setHomePlayer] = useState([]);
  const [awayPlayer, setAwayPlayer] = useState([]);
  const [homeCoach, setHomeCoach] = useState([]);
  const [awayCoach, setAwayCoach] = useState([]);

  const fetchData = async () => {
    const data = await getMatchStrategy(matchId);
    setAway(data.awayTeam);
    setHome(data.homeTeam);
    setHomePlayer(data.homeTeam.players);
    setAwayPlayer(data.awayTeam.players);
    setHomeCoach(data.homeTeam.coaches);
    setAwayCoach(data.awayTeam.coaches);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StrategyStyle>
      <div className="stratery">
        <p className="title">ĐỘI HÌNH RA SÂN</p>
        <div className="matchStrategy">
          <div className="teams">
            <div className="homeTeam">
              <div className="team">
                <img src={home.pictureUrl} alt="/" />
                <p>{home.teamName}</p>
              </div>
              <div className="team">
                <p className="title">Vị trí</p>
              </div>
            </div>
            <div> </div>
            <div className="awayTeam">
              <div className="team">
                <p className="title">Vị trí</p>
              </div>
              <div className="team">
                <p>{away.teamName}</p>
                <img src={away.pictureUrl} alt="/" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="teams">
              {homePlayer.map((player) => (
                <div key={player.idPlayer} className="playersTeam">
                  {player.status === 1 && player.position !== 4 && (
                    <div className="players">
                      <div className="player">
                        <img src={Shirt} alt="/" />
                        <p className="number">{player.shirtNumber}</p>
                        <p>{player.name}</p>
                      </div>
                      <div className="player">
                        {player.position === 0 && <p>GoalKeeper</p>}
                        {player.position === 1 && <p>Defender</p>}
                        {player.position === 2 && <p>Midfielder</p>}
                        {player.position === 3 && <p>Forward</p>}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="teams">
              {awayPlayer.map((player) => (
                <div key={player.idPlayer} className="playersTeam">
                  {player.status === 1 && player.position !== 4 && (
                    <div className="players">
                      <div className="player">
                        {player.position === 0 && <p>GoalKeeper</p>}
                        {player.position === 1 && <p>Defender</p>}
                        {player.position === 2 && <p>Midfielder</p>}
                        {player.position === 3 && <p>Forward</p>}
                      </div>
                      <div className="player">
                        <p>{player.name}</p>
                        <p className="number">{player.shirtNumber}</p>
                        <img src={Shirt} alt="/" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="title">CẦU THỦ DỰ BỊ</p>
        <div className="matchStrategy">
          <div className="teams">
            <div className="homeTeam">
              <div className="team">
                <img src={home.pictureUrl} alt="/" />
                <p>{home.teamName}</p>
              </div>
            </div>
            <div className="awayTeam_1 ">
              <div className="team">
                <p>{away.teamName}</p>
                <img src={away.pictureUrl} alt="/" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="teams">
              {homePlayer.map((player) => (
                <div key={player.idPlayer} className="playersTeam">
                  {player.position === 4 && (
                    <div className="players">
                      <div className="player">
                        <img src={Shirt} alt="/" />
                        <p className="number">{player.shirtNumber}</p>
                        <p>{player.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="teams">
              {awayPlayer.map((player) => (
                <div key={player.idPlayer} className="playersTeam_1">
                  {player.position === 4 && (
                    <div className="players">
                      <div className="player">
                        <p>{player.name}</p>
                        <p className="number">{player.shirtNumber}</p>
                        <img src={Shirt} alt="/" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="title">NGƯỜI QUẢN LÝ</p>
        <div className="matchStrategy">
          <div className="teams">
            <div className="homeTeam">
              <div className="team">
                <img src={home.pictureUrl} alt="/" />
                <p>{home.teamName}</p>
              </div>
            </div>
            <div className="awayTeam_1 ">
              <div className="team">
                <p>{away.teamName}</p>
                <img src={away.pictureUrl} alt="/" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="teams">
              {homeCoach.map((player) => (
                <div key={player.idPlayer} className="playersTeam">
                  <div className="players">
                    <div className="player">
                      <a href={player.urlCoach}>{player.name}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="teams">
              {awayCoach.map((player) => (
                <div key={player.idPlayer} className="playersTeam_1">
                  <div className="players">
                    <div className="player">
                      <a href={player.urlCoach}>{player.name}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StrategyStyle>
  );
};

export default Strategy;
