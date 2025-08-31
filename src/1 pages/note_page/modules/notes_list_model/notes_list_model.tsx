import { useLayoutEffect } from 'react'
import ListView from '../../../../3 components/list_view/listView'
import type { INote } from '../../../../3 components/note_widget'
import Note from '../../../../3 components/note_widget/view/note'
import PositionCenter from '../../../../4 UI/position_center/position_center'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { deleteNote, getNotes } from '../../../../store/reducers/notes_reducer'

const NotesListModel = () => {
	const dispatch = useAppDispatch()
	const notes = useAppSelector(state => state.notes)
	console.log('render')
	useLayoutEffect(() => {
		dispatch(getNotes())
		console.log('Notes component mounted')
		return () => {
			console.log('Notes component unmounted')
		}
	}, [])
	return (
		<>
			{notes.data.length == 0 ? (
				<PositionCenter>
					<h1>
						No notes available, <br />
						Please create one...
					</h1>
				</PositionCenter>
			) : (
				<ListView gap='1rem' flexDirection='column'>
					{notes.data.map(note => (
						<Note
							key={note.id}
							note={note as INote}
							onDeleteNote={() => dispatch(deleteNote({ id: note.id }))}
						/>
					))}
				</ListView>
			)}
		</>
	)
}

export default NotesListModel
