/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import getMatchDetail from '@src/apis/matchDetailApi';
import { MatchDetailStyle } from './index.style';
import Development from './Development/Development';
import Strategy from './Strategy/Strategy';
import Statistical from './Statistical/Statistical';
import New from './New/New';
import Icon from './img/youtube.png';
import { TABS } from '../../../constants/index';

const MatchDetail = ({ matchId }) => {
  const [changes, setChanges] = useState('details');
  const [details, setDetails] = useState({});
  const [away, setAway] = useState([]);
  const [home, setHome] = useState([]);
  const [awayGoal, setAwayGoal] = useState([]);
  const [homeGoal, setHomeGoal] = useState([]);

  const fetchData = async () => {
    const data = await getMatchDetail(matchId);
    setDetails(data);
    setAway(data.awayTeam);
    setHome(data.homeTeam);
    setAwayGoal(data.awayTeam.goals);
    setHomeGoal(data.homeTeam.goals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MatchDetailStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="container">
        <div className="title">
          <div className="titleLeft">
            <p className="wc">Giải bóng đá Thế giới 2022</p>
            <p>・</p>
            <p>{details.date}</p>
          </div>
          <p className="titleRight">Kết thúc</p>
        </div>
        <div className="teams">
          <div className="team">
            <img src={home.pictureUrl} alt="/" />
            <a href={details.linkHomeTeam}>{home.teamName}</a>
          </div>
          <div className="score">
            <div className="matchScore">
              <div>{home.score}</div>
              <div>-</div>
              <div>{away.score}</div>
            </div>
            <div className="penaltyScore">
              <div>{details.homeTeamPenaltyScore}</div>
              <div>penalty</div>
              <div>{details.awayTeamPenaltyScore}</div>
            </div>
          </div>
          <div className="team">
            <img src={away.pictureUrl} alt="/" />
            <a href={details.linkAwayTeam}>{away.teamName}</a>
          </div>
        </div>
        <div className="goals">
          <div className="goalLeft">
            {homeGoal.slice(0, Math.floor(`${home.score}`)).map((win) => (
              <div className="win">
                <span>{win.namePlayer}: </span>
                <span>{win.minute}</span>
              </div>
            ))}
          </div>
          <div className="goal">
            <span className="material-symbols-outlined">sports_soccer</span>
          </div>
          <div className="goalRight">
            {awayGoal.slice(0, Math.floor(`${away.score}`)).map((win) => (
              <div className="win">
                <span>{win.namePlayer}: </span>
                <span>{win.minute}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="stadium">
          <span>Sân vận động: </span>
          <a href={details.stadiumUrl}>{details.stadium}</a>
        </div>
        <div className="video">
          <a href={details.videoUrl}>
            <img src={details.imageUrl} alt="/" />
            <div className="time">
              <img className="icon" src={Icon} alt="/" />
              <span>Tóm tắt về trận đấu - {details.timePlay}</span>
            </div>
          </a>
        </div>
        <div className="changes">
          <div
            className={`container ${
              changes === TABS.DETAILS ? 'active' : null
            }`}
          >
            <div
              onClick={() => {
                setChanges(TABS.DETAILS);
              }}
            >
              DEVELOPMENT
            </div>
          </div>
          <div
            className={`container ${
              changes === TABS.STRATEGY ? 'active' : null
            }`}
          >
            <div
              onClick={() => {
                setChanges(TABS.STRATEGY);
              }}
            >
              STRATEGY
            </div>
          </div>
          <div
            className={`container ${
              changes === TABS.STATISTICAL ? 'active' : null
            }`}
          >
            <div
              className="subItem"
              onClick={() => {
                setChanges(TABS.STATISTICAL);
              }}
            >
              STATISTICAL
            </div>
          </div>
          <div
            className={`container ${changes === TABS.NEW ? 'active' : null}`}
          >
            <div
              onClick={() => {
                setChanges(TABS.NEW);
              }}
            >
              NEW
            </div>
          </div>
        </div>
        <div className="component">
          {changes === TABS.DETAILS && <Development matchId={matchId} />}
          {changes === TABS.STRATEGY && <Strategy setChanges={setChanges} />}
          {changes === TABS.STATISTICAL && (
            <Statistical setChanges={setChanges} />
          )}
          {changes === TABS.NEW && <New />}
        </div>
      </div>
    </MatchDetailStyle>
  );
};

export default MatchDetail;
