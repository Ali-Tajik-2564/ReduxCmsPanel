import Articles from './pages/Articles/Articles';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';

const routes = [
  { path: '/users/:page', element: <Users /> },
  { path: '/articles/:page', element: <Articles /> },
  { path: '/products/:page', element: <Products /> },
];
export default routes;
