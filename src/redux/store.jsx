import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { publicApi } from "./services/public.service";

const rootReducer = combineReducers({
	[publicApi.reducerPath]: publicApi.reducer,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(publicApi.middleware),
	devTools: true,
})

export default store;