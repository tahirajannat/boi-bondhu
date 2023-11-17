import { configureStore } from '@reduxjs/toolkit';
import productShopReducer from './reducers/productShopSlice';

export const store = configureStore({
    reducer: {
        productShop: productShopReducer,
    },
});
