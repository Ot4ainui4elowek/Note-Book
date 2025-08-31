import { useCallback } from 'react'
import { FolderColor, type IFolder } from '../types/folder_interface'
import FolderIcon from './folder.icon'
import './style.css'

const FolderWidget = ({ folder }: { folder: IFolder }) => {
	const { name } = folder
	const generateLetterId = useCallback((): string => {
		const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		let result = ''
		for (let i = 0; i < 16; i++) {
			result += letters.charAt(Math.floor(Math.random() * letters.length))
		}
		return result
	}, [])
	const id = generateLetterId()
	const getColor = (color: FolderColor) => {
		switch (color) {
			case FolderColor.App:
				return 'var(--primary)'
			case FolderColor.Red:
				return '#E81123'
			case FolderColor.Blue:
				return '#0078D4'
			case FolderColor.Green:
				return '#00B140'
			case FolderColor.Yellow:
				return '#a09500ff'
		}
	}

	return (
		<>
			<div className={`folder_widget_${id} folder_widget`}>
				<FolderIcon
					color={`color-mix(in srgb,${getColor(
						folder.color
					)} 40%, #000000ff 60%)`}
				/>
				{name}

				<style>
					{`
				.folder_widget_${id} {
				color: color-mix(in srgb,${getColor(folder.color)} 30%, #000000ff 70%);
					background-color: color-mix(in srgb,${getColor(folder.color)} 40%, #fff 60%);
					border: 2px solid color-mix(in srgb,${getColor(
						folder.color
					)} 50%, #000000ff 50%);
				}
			`}
				</style>
			</div>
		</>
	)
}

export default FolderWidget
