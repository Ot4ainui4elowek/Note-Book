import AppLayout from '../../4 UI/app_layout/app_layout'
import './style.css'
const Header = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className='header_layout'>
			<AppLayout padding='0.5rem 1rem'>
				<div className='header'>
					<h2 className='header_title'>NoteBook</h2>
					{children}
				</div>
			</AppLayout>
		</header>
	)
}

export default Header
