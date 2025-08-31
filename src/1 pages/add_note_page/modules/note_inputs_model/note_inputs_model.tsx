import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { AppRouter } from '../../../../router'
import { useAppDispatch } from '../../../../store/hooks'
import { addNote } from '../../../../store/reducers/notes_reducer'
import CreateNoteButton from '../../components/create_note_button/create_note_button'

const NoteInputsModel = ({
	setNoteFieldsIsNotEmpty,
}: {
	setNoteFieldsIsNotEmpty: (value: boolean) => void
}) => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [noteIsValid, setNoteIsValid] = useState(false)

	const navigate = useNavigate() // добавьте хук навигации

	const checkNoteIsNoteEmpty = title.trim().length > 0 || text.trim().length > 0
	const checkNoteIsValid = title.trim().length > 0 && text.trim().length > 0

	useEffect(() => {
		setNoteIsValid(checkNoteIsValid)
		setNoteFieldsIsNotEmpty(checkNoteIsNoteEmpty)
	}, [title, text])

	const dispatch = useAppDispatch()

	const dispatchNewNote = () => {
		dispatch(addNote({ title: title, text: text }))
		setTitle('')
		setText('')
		navigate(AppRouter.notePage.to)
	}
	const titleInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (titleInputRef.current) {
			titleInputRef.current.select()
		}
	}, [])

	return (
		<>
			<div className='add_note_input_container'>
				<input
					id='create_note_title'
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
			<CreateNoteButton isDisabled={noteIsValid} onClick={dispatchNewNote} />
		</>
	)
}

export default NoteInputsModel
