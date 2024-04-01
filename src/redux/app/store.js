// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../slices/taskSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer, PERSIST } from "redux-persist";

const persistConfigTasks = {
    key: 'tasks',
    storage
};

const store = configureStore({
    reducer: persistReducer(persistConfigTasks, taskReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST]
            }
        })
});

export default store;
