import React from 'react'

const ListView = ({
	gap,
	flexDirection,
	children,
}: {
	gap?: string
	flexDirection?: 'row' | 'column'
	children?: React.ReactNode
}) => {
	return (
		<div
			style={{
				display: 'flex',
				gap: gap ?? '1rem',
				flexDirection: flexDirection ?? 'row',
			}}
			className='list_view'
		>
			{children}
		</div>
	)
}

export default React.memo(ListView)
