import './style.css'

const AppLayout = ({
	children,
	padding,
}: {
	children?: React.ReactNode
	padding?: string
}) => {
	return (
		<div className='center'>
			<div style={{ padding: padding ?? '0 1rem' }} className='app_layout'>
				{children}
			</div>
		</div>
	)
}

export default AppLayout
