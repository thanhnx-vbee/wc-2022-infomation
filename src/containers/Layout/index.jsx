import React from 'react';
import { Route } from 'react-router-dom';
import TopNav from './TopNav/TopNav';
import Footer from './Footer/Footer';
import Match from '../Match/Match';
import Footballers from '../Footballers/Footballers';
import Statistics from '../Statistic/Statistics';
import Ranks from '../Ranks/Ranks';

const Layout = () => {
  return (
    <div>
      <TopNav />
      <div>
        <Route exact path="/" component={Match} />
        <Route exact path="/footballers" component={Footballers} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/ranks" component={Ranks} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
