import type { IFolder } from '../../3 components/folder_widget/types/folder_interface'

export class FoldersLocalStorageAPI {
	protected foldersLocalStorageName = '--app_folders'
	addFolder = async (folder: IFolder) => {
		const folders = await this.getFolders()
		folders.push(folder)
		localStorage.setItem(this.foldersLocalStorageName, JSON.stringify(folders))
	}

	deleteFolder = async (id: string) => {
		const folders = await this.getFolders()
		const updatedFolders = folders.filter(folder => folder.id !== id)
		localStorage.setItem(
			this.foldersLocalStorageName,
			JSON.stringify(updatedFolders)
		)
	}
	getFolders = (): IFolder[] => {
		const folders = localStorage.getItem(this.foldersLocalStorageName)
		return folders ? JSON.parse(folders) : []
	}
	updateFolder = async (folder: IFolder) => {
		const folders = await this.getFolders()
		const index = folders.findIndex(f => f.id === folder.id)
		if (index !== -1) {
			folders[index] = folder
			localStorage.setItem(
				this.foldersLocalStorageName,
				JSON.stringify(folders)
			)
		}
	}
}
