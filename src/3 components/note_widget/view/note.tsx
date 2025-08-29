import React from 'react'
import CloseButton from '../../../4 UI/close_button/close_button'
import type { INote } from '../types/note_interface'
import './style.css'

const Note = ({
	note,
	onDeleteNote,
}: {
	note: INote
	onDeleteNote?: () => void
}) => {
	console.log('render 2')
	const { id, text, title } = note
	return (
		<div className='note' key={id.toString()}>
			<div className='note_header'>
				<h3>{title}</h3>
				{onDeleteNote && (
					<CloseButton
						className='delete_note_button'
						props={{ onClick: onDeleteNote }}
					/>
				)}
			</div>
			<div className='note_footer'>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default React.memo(Note)
