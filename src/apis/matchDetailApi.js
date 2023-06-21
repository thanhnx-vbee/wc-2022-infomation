import api from './api';

const getMatchDetail = async (IdMatch) => {
  const matchDetail = await api({
    method: 'GET',
    url: `/overviewmatch/${IdMatch}`,
  });
  return matchDetail;
};

export default getMatchDetail;
