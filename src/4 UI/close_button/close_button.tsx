import './style.css'

const CloseButton = ({
	props,
	width,
	height,
	className,
}: {
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>
	width?: number
	height?: number
	className?: string
}) => {
	return (
		<button
			className={(className ?? '') + ' close_note_button'}
			{...props}
			style={{ width: width ?? 60 + 'px', height: height ?? 60 + 'px' }}
		></button>
	)
}

export default CloseButton
