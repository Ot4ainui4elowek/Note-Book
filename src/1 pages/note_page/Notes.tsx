import { useEffect } from 'react'
import ListView from '../../3 components/list_view/list_view'
import type { INote } from '../../3 components/note_widget'
import Note from '../../3 components/note_widget/view/note'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { deleteNote, getNotes } from '../../store/reducers/notes_reducer'
import AddNoteButton from './components/add_note_button/add_note_button'

import './style.css'

const Notes = () => {
	const dispatch = useAppDispatch()
	const notes = useAppSelector(state => state.notes)
	console.log('render')
	useEffect(() => {
		dispatch(getNotes())
		console.log('Notes component mounted')
		return () => {
			console.log('Notes component unmounted')
		}
	}, [])
	return (
		<div className='notes_page'>
			<ListView gap='1rem' flexDirection='column'>
				{notes.data.map(note => (
					<Note
						key={note.id}
						note={note as INote}
						onDeleteNote={() => dispatch(deleteNote({ id: note.id }))}
					/>
				))}
			</ListView>
			<AddNoteButton />
		</div>
	)
}

export default Notes
