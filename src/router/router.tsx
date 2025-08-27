import { Route, Routes, useLocation } from 'react-router'
import AddNote from '../1 pages/Add_Notes'
import Notes from '../1 pages/Notes'
import Header from '../2 modules/header/header'
import PageLinksListView from '../3 components/page_links_list_view/page_links_list_view'
import AppLayout from '../4 UI/app_layout/app_layout'
import './router.css'

function Router() {
	const { pathname } = useLocation()

	return (
		<div>
			<Header>
				<PageLinksListView
					links={[
						{
							to: '/',
							label: 'Notes',
							className: pathname == '/' ? 'active' : '',
						},
						{
							to: '/add',
							label: 'Add Notes',
							className: pathname == '/add' ? 'active' : '',
						},
					]}
				/>
			</Header>
			<AppLayout padding='1rem'>
				<main>
					<Routes>
						<Route path='/' element={<Notes />} />
						<Route path='/add' element={<AddNote />} />
					</Routes>
				</main>
			</AppLayout>
		</div>
	)
}

export default Router
