import api from './api';

const getMatchStatistical = async (IdMatch) => {
  const matchDetail = await api({
    method: 'GET',
    url: `/summarymatch/${IdMatch}`,
  });
  return matchDetail;
};

export default getMatchStatistical;
