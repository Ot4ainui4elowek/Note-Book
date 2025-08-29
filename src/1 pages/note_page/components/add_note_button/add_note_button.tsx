import AppLayout from '../../../../4 UI/app_layout/app_layout'
import { AppRouter, RouteButton } from '../../../../router'
import './style.css'

const AddNoteButton = () => {
	return (
		<RouteButton
			className='add_note_button_bottom'
			route={AppRouter.addNotePage}
		>
			<AppLayout>
				<button className='app_button '>Add Note +</button>
			</AppLayout>
		</RouteButton>
	)
}
export default AddNoteButton
