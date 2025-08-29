import './style.css'

const AddButton = ({
	props,
	width,
	height,
}: {
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>
	width?: number
	height?: number
}) => {
	return (
		<button
			className='add_note_button'
			{...props}
			style={{ width: width ?? 60 + 'px', height: height ?? 60 + 'px' }}
		></button>
	)
}

export default AddButton
