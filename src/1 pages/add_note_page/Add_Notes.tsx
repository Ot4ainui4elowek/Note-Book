import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalWindow from '../../2 modules/modal_window/modal_window'
import AppLayout from '../../4 UI/app_layout/app_layout'
import { AppRouter, RouteButton } from '../../router'
import { useAppDispatch } from '../../store/hooks'
import { addNote } from '../../store/reducers/notes_reducer'
import './style.css'

const AddNotePage = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [noteIsValid, setNoteIsValid] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const backButtonRef = useRef<HTMLButtonElement>(null)

	const titleInputRef = useRef<HTMLInputElement>(null)
	const navigate = useNavigate() // добавьте хук навигации

	const checkNoteIsValid = title.trim().length > 0 && text.trim().length > 0
	const checkNoteFieldsIsNotEmpty = () => {
		return title.trim().length > 0 || text.trim().length > 0
	}

	const onBackButtonClick = (e: React.MouseEvent) => {
		if (checkNoteFieldsIsNotEmpty()) {
			e.preventDefault() // отменяем переход по роуту
			setShowModal(true)
		}
		// иначе переход произойдет автоматически
	}

	const handleLeave = () => {
		setShowModal(false)
		navigate(AppRouter.notePage.to) // переход на нужную страницу
	}

	const handleStay = () => {
		setShowModal(false)
	}

	useEffect(() => {
		setNoteIsValid(checkNoteIsValid)
	}, [title, text])

	useLayoutEffect(() => {
		titleInputRef.current?.focus()
	}, [])

	const dispatch = useAppDispatch()
	console.log('render')
	const dispatchNewNote = () => {
		dispatch(addNote({ title: title, text: text }))
		setTitle('')
		setText('')
		navigate(AppRouter.notePage.to)
	}
	return (
		<div className='add_note_page'>
			{showModal && (
				<ModalWindow
					title='Message'
					text='You have unsaved changes. Are you sure you want to leave?'
				>
					<div className='modal_window_content'>
						<button
							className='app_button add_note_modal_leave_button'
							onClick={handleLeave}
						>
							Leave
						</button>
						<button className='app_button' onClick={handleStay}>
							Stay
						</button>
					</div>
				</ModalWindow>
			)}
			<RouteButton
				onClick={e =>
					onBackButtonClick(e as React.MouseEvent<HTMLAnchorElement>)
				}
				to={AppRouter.notePage.to}
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
