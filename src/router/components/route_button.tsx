import React from 'react'
import { Link } from 'react-router'

interface IRouteButton extends React.ComponentPropsWithoutRef<typeof Link> {
	className?: string
	children?: React.ReactNode
	onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void
}

const RouteButton = (props: IRouteButton) => {
	return (
		<Link {...props} onClick={props.onClick}>
			{props.children}
		</Link>
	)
}
export default React.memo(RouteButton)
