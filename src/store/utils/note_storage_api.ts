import type { INote } from '../../3 components/note_widget'

interface INoteStorageAPI {
	getNotes: () => INote[]
	addNote: (note: INote) => Promise<void>
	updateNote: (note: INote) => Promise<void>
	deleteNote: (id: string) => Promise<void>
}

const addNote = async (note: INote) => {
	const notes = await getNotes()
	notes.push(note)
	localStorage.setItem('notes', JSON.stringify(notes))
}

const deleteNote = async (id: string) => {
	const notes = await getNotes()
	const updatedNotes = notes.filter(note => note.id !== id)
	localStorage.setItem('notes', JSON.stringify(updatedNotes))
}
const getNotes = (): INote[] => {
	const notes = localStorage.getItem('notes')
	return notes ? JSON.parse(notes) : []
}
const updateNote = async (note: INote) => {
	const notes = await getNotes()
	const index = notes.findIndex(n => n.id === note.id)
	if (index !== -1) {
		notes[index] = note
		localStorage.setItem('notes', JSON.stringify(notes))
	}
}

export const NoteLocalStorageAPI: INoteStorageAPI = {
	getNotes,
	addNote,
	deleteNote,
	updateNote,
}
