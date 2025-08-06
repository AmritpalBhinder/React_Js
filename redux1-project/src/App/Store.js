import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/CounterSlice';
import Counter from '../Components/Counter';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});
 
export default store;