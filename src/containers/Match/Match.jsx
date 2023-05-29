import React, { useEffect, useState } from 'react';
import getMatchList from '../../apis/matchApi';

const Match = () => {
  const [rows, setRows] = useState([]);
  const fetchData = async () => {
    const data = await getMatchList();
    console.log(data);
    console.log(Object.values(data));
    setRows(Object.values(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {rows.map((row) => (
        <div>
          {row.map((sub, key) => (
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
