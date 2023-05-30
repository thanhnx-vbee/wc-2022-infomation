import axios from 'axios';

const getMatchList = async () => {
  const response = await axios.get(
    'https://project20221-team2-wordcup.onrender.com/api/tutorialmatch',
  );
  const data = await response.data;
  return data;
};

export default getMatchList;
