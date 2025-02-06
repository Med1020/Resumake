import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { setupListeners } from "@reduxjs/toolkit/query";

const persistConfig = {
  key: "root",
  storage,
  version: 0,
  blacklist: ["userDetails", "resumeContent", "showComponent"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const middleware = [
//   thunk,
//   // apiSlice.middleware
// ];

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
