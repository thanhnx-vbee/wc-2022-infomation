import React, { useState, useEffect } from 'react';
import getMatchEvent from '@src/apis/matchEvent';
import { DEVELOPMENTS } from '@src/constants';
import { DevelopmentStyle } from './index.style';
import Foot from '../img/football.png';
import YellowCard from '../img/yellowCard.png';
import Swap from '../img/swap1.png';

const Development = ({ matchId }) => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const data = await getMatchEvent(matchId);
    setEvents(data.eventArr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DevelopmentStyle>
      <div className="container">
        <span className="material-symbols-outlined">timer</span>
        <div className="title">KẾT THÚC TRẬN ĐẤU</div>
      </div>
      {events.map((event) => (
        <div className="event">
          {event.tag === DEVELOPMENTS.GOAL && (
            <div className="table">
              <div className="header">
                <div className="headerLeft">
                  <img src={Foot} alt="/" />
                  <div className="title"> GHI BÀN</div>
                </div>
                <div className="headerRight">
                  <span>Phút {event.minute}</span>
                </div>
              </div>
              <div className="contain">
                <div className="players">
                  <div className="player">
                    <p>
                      <a href={event.urlPlayer}>{event.namePlayer}</a>
                      <p>- {event.jerseyNum}</p>
                    </p>
                    <p>
                      <img src={event.urlPictureTeam} alt="/" />
                      <p>
                        <a href={event.urlTeam}>{event.teamName}</a>
                        <p>- {event.positionLocalized}</p>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {event.tag === DEVELOPMENTS.SUB && (
            <div className="table">
              <div className="header">
                <div className="headerLeft">
                  <img src={Swap} alt="/" />
                  <span className="title">THAY NGƯỜI</span>
                </div>
                <div className="headerRight">
                  <span>Phút {event.minute}</span>
                </div>
              </div>
              <div className="contain">
                <div className="players">
                  <div className="player">
                    <div className="titlePlayIn">VÀO SÂN</div>
                    <p>
                      <a href={event.urlPlayerOff}>{event.playerOffName}</a>
                      <p>- {event.jerseyNumOff}</p>
                    </p>
                    <p>
                      <img src={event.urlPictureTeam} alt="/" />
                      <p>
                        <a href={event.urlTeam}>{event.teamName}</a>
                        <p>- {event.positionLocalizedOff}</p>
                      </p>
                    </p>
                  </div>
                  <div className="player">
                    <div className="titlePlayOut">RA SÂN</div>
                    <p>
                      <a href={event.UrlPlayerOn}>{event.playerOnName}</a>
                      <p>- {event.jerseyNumOn}</p>
                    </p>
                    <p>
                      <img src={event.urlPictureTeam} alt="/" />
                      <p className="team">
                        <a href={event.urlTeam}>{event.teamName}</a>
                        <p>- {event.positionLocalizedOn}</p>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {event.tag === DEVELOPMENTS.BOOKING && (
            <div className="table">
              <div className="header">
                <div className="headerLeft">
                  <img src={YellowCard} alt="/" />
                  <span className="title">THẺ VÀNG</span>
                </div>
                <div className="headerRight">
                  <span>Phút {event.minute}</span>
                </div>
              </div>
              <div className="contain">
                <div className="players">
                  <div className="player">
                    <p>
                      <a href={event.urlPlayer}>{event.namePlayer}</a>
                      <p>- {event.jerseyNum}</p>
                    </p>
                    <p>
                      <img src={event.urlPictureTeam} alt="/" />
                      <p>
                        <a href={event.urlTeam}>{event.teamName}</a>
                        <p>- {event.positionLocalized}</p>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </DevelopmentStyle>
  );
};

export default Development;
