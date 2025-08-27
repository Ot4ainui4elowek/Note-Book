import PageLinkButton from '../../4 UI/page_link_button/page_link_button'
import type { IPageLinkButton } from '../../4 UI/page_link_button/page_link_button_interface'
import './style.css'

const PageLinksListView = ({ links }: { links: IPageLinkButton[] }) => {
	return (
		<div className='router_links'>
			{links.map((link, index) => (
				<PageLinkButton key={index} {...link} />
			))}
		</div>
	)
}
export default PageLinksListView
