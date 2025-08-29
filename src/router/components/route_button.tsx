import React from 'react'
import { Link } from 'react-router'
import type { IRoute } from '../routes'

const RouteButton = ({
	route,
	className,
	children,
}: {
	route: IRoute
	className?: string
	children?: React.ReactNode
}) => {
	return (
		<Link className={className} to={route.to}>
			{children}
		</Link>
	)
}
export default React.memo(RouteButton)
