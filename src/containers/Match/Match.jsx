import React, { useEffect, useState } from 'react';
import getMatchList from '../../apis/matchApi';
import { MatchStyle, Image } from './index.style';

const Match = () => {
  const [matches, setMatches] = useState([]);
  const [dates, setDates] = useState([]);

  const fetchData = async () => {
    const data = await getMatchList();
    setMatches(Object.values(data));
    setDates(Object.keys(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MatchStyle>
      {matches.map((match, index) => (
        <div className="matchComponent">
          <form>
            <label className="dateTime" htmlFor={index}>
              {dates[index]}
            </label>
            <input
              name="hidden"
              id={index}
              className="hidden"
              type="checkbox"
              hidden
            />
            <div className="matches">
              {match.map((subMatch) => (
                <div className="match">
                  <div className="subMatch">
                    <div className="title">
                      <p>{subMatch.groupStage}</p>
                    </div>
                    <div className="info">
                      <div className="twoTeam">
                        <div className="team">
                          <Image
                            src={subMatch.imagehomeTeam.replace(
                              '{format}-{size}',
                              'sq-1',
                            )}
                          />
                          <p className="name"> {subMatch.homeTeam}</p>
                        </div>
                        <div className="dateTable">
                          <div className="column">
                            <div className="table">{subMatch.table}</div>
                            <div className="highLight">
                              {subMatch.timehighlight}
                            </div>
                          </div>
                        </div>
                        <div className="team">
                          <Image
                            src={subMatch.imageawayTeam.replace(
                              '{format}-{size}',
                              'sq-1',
                            )}
                          />
                          <p className="name"> {subMatch.awayTeam}</p>
                        </div>
                      </div>
                    </div>
                    <div className="result">
                      <a href={subMatch.video} className="video">
                        Video
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
      ))}
    </MatchStyle>
  );
};

export default Match;
