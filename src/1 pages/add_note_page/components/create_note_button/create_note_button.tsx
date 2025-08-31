import React from 'react'
import AppLayout from '../../../../4 UI/app_layout/app_layout'

const CreateNoteButton = ({
	isDisabled,
	onClick,
}: {
	isDisabled: boolean
	onClick: () => void
}) => {
	return (
		<div className='add_button'>
			<AppLayout>
				<button
					disabled={!isDisabled}
					className=' app_button'
					onClick={onClick}
				>
					Create New Note +
				</button>
			</AppLayout>
		</div>
	)
}

export default React.memo(CreateNoteButton)
