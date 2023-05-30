import React, { useEffect, useState } from 'react';
import getMatchList from '../../apis/matchApi';

const Match = () => {
  const [matchs, setMatchs] = useState([]);
  const fetchData = async () => {
    const data = await getMatchList();
    setMatchs(Object.values(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {matchs.map((match) => (
        <div>
          {match.map((sub, key) => (
            <div>
              {key}
              {sub.date}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Match;
