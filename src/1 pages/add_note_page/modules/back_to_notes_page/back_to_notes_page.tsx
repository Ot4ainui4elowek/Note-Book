import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ModalWindow from '../../../../2 modules/modal_window/modal_window'
import { AppRouter, RouteButton } from '../../../../router'

const BackToNotesPage = ({
	noteFieldsIsNotEmpty,
}: {
	noteFieldsIsNotEmpty: boolean
}) => {
	const [showModal, setShowModal] = useState(false)
	const navigate = useNavigate()

	const onBackButtonClick = (e: React.MouseEvent) => {
		if (noteFieldsIsNotEmpty) {
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
	return (
		<>
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
		</>
	)
}
export default React.memo(BackToNotesPage)
