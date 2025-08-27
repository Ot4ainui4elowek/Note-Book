import { Link } from 'react-router'
import type { IPageLinkButton } from './page_link_button_interface'
import './style.css'
const PageLinkButton = ({ to, label, className }: IPageLinkButton) => {
	return (
		<div className='link_button'>
			<h3>
				<Link className={className} to={to}>
					{label}
				</Link>
			</h3>
		</div>
	)
}

export default PageLinkButton
