import { createSlice } from '@reduxjs/toolkit'
import type { INote } from '../../3 components/note_widget'
import type { INoteCreate } from '../../3 components/note_widget/types/note_interface'
import { NoteLocalStorageAPI } from '../utils/note_storage_api'

export enum NoteStatus {
	Idle = 'idle',
	Loading = 'loading',
	Error = 'error',
}

interface NoteState {
	data: INote[]
	status: NoteStatus
}

const initialState: NoteState = {
	data: [],
	status: NoteStatus.Idle,
}

const NotesReducer = createSlice({
	name: 'notes',
	initialState: initialState,
	reducers: {
		getNotes: state => {
			state.status = NoteStatus.Loading
			state.data = NoteLocalStorageAPI.getNotes()
			console.log('flag:', state.data)
			state.status = NoteStatus.Idle
		},
		updateNote: (state, action: { payload: INote }) => {
			const index = state.data.findIndex(note => note.id === action.payload.id)
			if (index !== -1) {
				state.data[index] = action.payload
				NoteLocalStorageAPI.updateNote(action.payload)
			}
		},
		addNote: (state, action: { payload: INoteCreate }) => {
			const newNote: INote = { id: Date.now().toString(), ...action.payload }
			state.data.push(newNote)
			NoteLocalStorageAPI.addNote(newNote)
		},
		deleteNote: (state, action: { payload: { id: string } }) => {
			NoteLocalStorageAPI.deleteNote(action.payload.id)
			state.data = state.data.filter(note => note.id !== action.payload.id)
		},
	},
})

export const { addNote, deleteNote, getNotes, updateNote } =
	NotesReducer.actions
export const notesReducer = NotesReducer.reducer
