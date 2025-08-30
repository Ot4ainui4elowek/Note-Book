import './style.css'

const ModalWindow = ({
	children,
	title,
	text,
}: {
	children?: React.ReactNode
	title?: string
	text?: string
}) => {
	return (
		<div className='modal_window'>
			<div className='modal_content'>
				<h2 className='modal_title'>{title}</h2>
				<div className='modal_content_body'>
					<h3>{text}</h3>
					{children}
				</div>
			</div>
		</div>
	)
}

export default ModalWindow
