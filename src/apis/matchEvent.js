import api from './api';

const getMatchEvent = async (IdMatch) => {
  const matchDetail = await api({
    method: 'GET',
    url: `/eventMatch/${IdMatch}`,
  });
  return matchDetail;
};

export default getMatchEvent;
