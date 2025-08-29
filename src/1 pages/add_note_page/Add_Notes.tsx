import { useEffect, useRef, useState } from 'react'
import AppLayout from '../../4 UI/app_layout/app_layout'
import { AppRouter, RouteButton } from '../../router'
import { useAppDispatch } from '../../store/hooks'
import { addNote } from '../../store/reducers/notes_reducer'
import './style.css'

const AddNotePage = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [noteIsValid, setNoteIsValid] = useState(false)

	const titleInputRef = useRef<HTMLInputElement>(null)

	const checkNoteIsValid = title.trim().length > 0 && text.trim().length > 0
	useEffect(() => {
		setNoteIsValid(checkNoteIsValid)
	}, [title, text])

	useEffect(() => {
		titleInputRef.current?.focus()
	}, [])

	const dispatch = useAppDispatch()
	console.log('render')
	const dispatchNewNote = () => {
		dispatch(addNote({ title: title, text: text }))
	}
	return (
		<div className='add_note_page'>
			<RouteButton
				route={AppRouter.notePage}
				className='back_button app_button'
			>
				Back
			</RouteButton>
			<div className='add_note_input_container'>
				<input
					ref={titleInputRef}
					maxLength={28}
					value={title}
					onChange={e => setTitle(e.target.value)}
					className='create_note_title'
					type='text'
					placeholder='Write the title here...'
				/>
				<textarea
					value={text}
					onChange={e => setText(e.target.value)}
					className='create_note_text'
					name='title'
					cols={30}
					rows={17}
					maxLength={768}
					placeholder='Write the text of your note here...'
				></textarea>
			</div>
			<div className='add_button'>
				<AppLayout>
					<button
						disabled={!noteIsValid}
						className=' app_button'
						onClick={dispatchNewNote}
					>
						Create New Note +
					</button>
				</AppLayout>
			</div>
		</div>
	)
}

export default AddNotePage
