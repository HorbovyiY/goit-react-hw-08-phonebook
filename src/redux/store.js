import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { authReducer } from './authSlice'
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
}

const persistedauthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistedauthReducer,
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
})

export const persistor = persistStore(store)
