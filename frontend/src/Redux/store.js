import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducer/UserReducer';
import ArticleReducer from './reducer/ArticleReducer';
import ProductReducer from './reducer/ProductReducer';
const store = configureStore({
  reducer: {
    users: UserReducer,
    articles: ArticleReducer,
    products: ProductReducer,
  },
});
export default store;
