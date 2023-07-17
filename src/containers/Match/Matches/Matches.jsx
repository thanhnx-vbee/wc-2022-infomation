/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { MatchesStyle } from './index.style';
import { TABS } from '../../../constants/index';

const Matches = ({ date, match, setMatchId, setTab }) => {
  const [swap, setSwap] = useState(false);

  return (
    <MatchesStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="nav">
        <div className="dateTime">{date}</div>
        <div
          className="icon"
          onClick={() => {
            setSwap((prev) => !prev);
          }}
        >
          {swap ? (
            <span className="material-symbols-outlined">open_in_full</span>
          ) : (
            <span className="material-symbols-outlined">close</span>
          )}
        </div>
      </div>
      <div className="container">
        <div className={swap ? 'matchAppear' : 'matchActive'}>
          {match.map((subMatch) => (
            <div className="match" key={subMatch.idMatch}>
              <div className="subMatch">
                <div className="title">
                  <p>{subMatch.groupStage}</p>
                </div>
                <div className="info">
                  <div className="twoTeam">
                    <div className="team">
                      <img
                        src={subMatch.imagehomeTeam.replace(
                          '{format}-{size}',
                          'sq-2',
                        )}
                        alt="/"
                      />
                      <p className="name"> {subMatch.homeTeam}</p>
                    </div>
                    <div className="dateTable">
                      <div className="column">
                        {subMatch.table === '0' ? (
                          <div className="tableNone" />
                        ) : (
                          <div className="table">{subMatch.table}</div>
                        )}
                      </div>
                    </div>
                    <div className="team">
                      <img
                        src={subMatch.imageawayTeam.replace(
                          '{format}-{size}',
                          'sq-2',
                        )}
                        alt="/"
                      />
                      <p className="name"> {subMatch.awayTeam}</p>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <div
                    className="createButton"
                    onClick={() => {
                      setMatchId(subMatch.idMatch);
                      setTab(TABS.DETAIL);
                    }}
                  >
                    <p className="create">More</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MatchesStyle>
  );
};

export default Matches;
