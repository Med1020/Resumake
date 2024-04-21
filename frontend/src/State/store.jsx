import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "resumake",
  storage,
  version: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);
