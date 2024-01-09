import Articles from './pages/Articles/Articles';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';

const routes = [
  { path: '/', element: <Users /> },
  { path: '/users', element: <Users /> },
  { path: '/articles', element: <Articles /> },
  { path: '/products', element: <Products /> },
];
export default routes;
