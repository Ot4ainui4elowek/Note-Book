import { useState } from 'react'
import BackToNotesPAgeModule from '../modules/back_to_notes_page/back_to_notes_page'
import NoteInputsModel from '../modules/note_inputs_model/note_inputs_model'
import './style.css'

const AddNotePage = () => {
	const [noteFieldsIsNotEmpty, setNoteFieldsIsNotEmpty] = useState(false)

	console.log('render')
	return (
		<div className='add_note_page'>
			<BackToNotesPAgeModule noteFieldsIsNotEmpty={noteFieldsIsNotEmpty} />
			<NoteInputsModel setNoteFieldsIsNotEmpty={setNoteFieldsIsNotEmpty} />
		</div>
	)
}

export default AddNotePage
