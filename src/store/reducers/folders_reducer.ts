import { createSlice } from '@reduxjs/toolkit'
import type { IFolder } from '../../3 components/folder_widget/types/folder_interface'
import { FoldersLocalStorageAPI } from '../utils/folders_storage_api'

const folderLocalAPI = new FoldersLocalStorageAPI()

const folders: IFolder[] = []

const FoldersReducer = createSlice({
	name: 'folders',
	initialState: folders,
	reducers: {
		addFolder: (state, action: { payload: IFolder }) => {
			folderLocalAPI.addFolder(action.payload)
			state.push(action.payload)
		},
		deleteFolder: (state, action: { payload: { id: string } }) => {
			folderLocalAPI.deleteFolder(action.payload.id)
			return state.filter(folder => folder.id !== action.payload.id)
		},
		getFolders: state => {
			const folders = folderLocalAPI.getFolders()
			return folders
		},
	},
})

export const { addFolder, deleteFolder, getFolders } = FoldersReducer.actions
export const foldersReducer = FoldersReducer.reducer
