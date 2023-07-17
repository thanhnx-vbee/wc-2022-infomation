import React, { useState } from 'react';
import TopNav from './TopNav/TopNav';
import Footer from './Footer/Footer';
import Match from '../Match/Match';
import Footballers from '../Footballers/Footballers';
import Statistics from '../Statistic/Statistics';
import MatchDetail from '../Match/MatchDetail/MatchDetail';
import Ranks from '../Ranks/Ranks';
import { TABS } from '../../constants/index';

const Layout = () => {
  const [tab, setTab] = useState('home');
  const [matchId, setMatchId] = useState('');
  const [matches, setMatches] = useState([]);
  const [date, setDate] = useState('');

  return (
    <div>
      <TopNav setTab={setTab} tab={tab} />
      {tab === TABS.HOME && (
        <Match
          setTab={setTab}
          setMatchId={setMatchId}
          setMatches={setMatches}
          setDate={setDate}
          date={date}
          matches={matches}
        />
      )}
      {tab === TABS.FOOTBALLERS && <Footballers setTab={setTab} />}
      {tab === TABS.STATISTICS && <Statistics setTab={setTab} />}
      {tab === TABS.RANKS && <Ranks setTab={setTab} />}
      {tab === TABS.DETAIL && <MatchDetail matchId={matchId} />}
      <Footer />
    </div>
  );
};

export default Layout;
