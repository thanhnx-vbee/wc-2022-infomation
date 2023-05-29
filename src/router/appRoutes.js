import Login from '@src/pages/Login';
import Home from '@src/pages/Home';

import routes from '@src/constants/route';

export default [
  {
    path: routes.LOGIN,
    component: Login,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
];
