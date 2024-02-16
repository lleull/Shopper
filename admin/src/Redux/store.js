import { configureStore } from "@reduxjs/toolkit";
import Rootreducer from "./RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, Rootreducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware({
    serializableCheck: false
  })
});

const persistor = persistStore(store);

export { store, persistor };
