import { IFolder } from '../../../3 components/folder_widget/types/folder_interface'
import FolderWidget from '../../../3 components/folder_widget/view/folder_widget'
import ListView from '../../../3 components/list_view/listView'
import AddNoteButton from '../components/add_note_button/add_note_button'
import NotesListModel from '../modules/notes_list_model/notes_list_model'
import './style.css'

const Notes = () => {
	return (
		<div className='notes_page'>
			<ListView gap='1rem' flexDirection='column'>
				<NotesListModel />
				<FolderWidget
					folder={{
						id: '1',
						name: 'Folder 1',
						color: IFolder.getFolderColors().app,
					}}
				/>
				<FolderWidget
					folder={{
						id: '2',
						name: 'Folder 1',
						color: IFolder.getFolderColors().blue,
					}}
				/>
				<FolderWidget
					folder={{
						id: '3',
						name: 'Folder 1',
						color: IFolder.getFolderColors().green,
					}}
				/>
				<FolderWidget
					folder={{
						id: '4',
						name: 'Folder 1',
						color: IFolder.getFolderColors().red,
					}}
				/>
				<FolderWidget
					folder={{
						id: '5',
						name: 'Folder 1',
						color: IFolder.getFolderColors().yellow,
					}}
				/>
			</ListView>

			<AddNoteButton />
		</div>
	)
}

export default Notes
