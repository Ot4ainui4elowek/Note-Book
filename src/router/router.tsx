import { useCallback } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router'
import AddNotePage from '../1 pages/add_note_page/view/Add_Notes'
import Notes from '../1 pages/note_page/view/Notes'
import Header from '../2 modules/header/header'
import AppLayout from '../4 UI/app_layout/app_layout'
import { createStore } from '../store/app_store'
import './router.css'

function Router() {
	const { pathname } = useLocation()

	const store = useCallback(() => createStore(), [])
	const getPageName = useCallback(() => {
		switch (pathname) {
			case '/':
				return 'Notes'
			case '/add':
				return 'Add Note'
			default:
				return 'Unknown'
		}
	}, [pathname])
	return (
		<Provider store={store()}>
			<div>
				<Header>
					<h2 style={{ color: 'white' }}>{getPageName()}</h2>
				</Header>
				<AppLayout padding='1rem'>
					<main>
						<Routes>
							<Route path='/' element={<Notes />} />
							<Route path='/add' element={<AddNotePage />} />
						</Routes>
					</main>
				</AppLayout>
			</div>
		</Provider>
	)
}

export default Router
