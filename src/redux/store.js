import { configureStore } from '@reduxjs/toolkit';
import productShopReducer from './reducers/productShopSlice';
import userReducer from './reducers/usersSlice';

export const store = configureStore({
    reducer: {
        productShop: productShopReducer,
        users: userReducer,
    },
});
