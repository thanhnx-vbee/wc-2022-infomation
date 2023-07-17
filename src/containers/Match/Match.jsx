import React, { useEffect, useState } from 'react';
import getMatchList from '../../apis/matchApi';
import { MatchStyle } from './index.style';
import Matches from './Matches/Matches';

const Match = ({ setMatches, setDate, setMatchId, setTab }) => {
  const [matchesByDate, setMatchesByDate] = useState({});

  const fetchData = async () => {
    const data = await getMatchList();
    setMatchesByDate(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const dates = Object.keys(matchesByDate);
    const sortedDates = dates.slice().sort().reverse();
    const sortedMatches = sortedDates.map((date) => matchesByDate[date]);
    setMatches(sortedMatches);
    setDate(sortedDates);
  }, [matchesByDate]);

  return (
    <MatchStyle>
      {matchesByDate &&
        Object.entries(matchesByDate)
          .reverse()
          .map(([date, match]) => (
            <Matches
              key={date}
              date={date}
              match={match}
              setMatchId={setMatchId}
              setTab={setTab}
            />
          ))}
    </MatchStyle>
  );
};

export default Match;
