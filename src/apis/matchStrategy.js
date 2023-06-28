import api from './api';

const getMatchStrategy = async (IdMatch) => {
  const matchDetail = await api({
    method: 'GET',
    url: `/taticsMatch/${IdMatch}`,
  });
  return matchDetail;
};

export default getMatchStrategy;
