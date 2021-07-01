import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Info from '../views/pages/resto-info';
import Menu from '../views/pages/menu';
import Review from '../views/pages/review';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/detail/:id/info': Info,
  '/detail/:id/menu': Menu,
  '/detail/:id/review': Review,
};

export default routes;
