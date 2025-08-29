import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from './reducers/notes_reducer'

export const createStore = () =>
	configureStore({
		reducer: {
			notes: notesReducer,
		},
	})

export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
