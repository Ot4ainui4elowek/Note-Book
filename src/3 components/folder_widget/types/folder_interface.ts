export class IFolder {
	constructor(id: string, name: string, color?: FolderColor) {
		this.id = id
		this.name = name
		this.color = color ?? FolderColor.App
	}
	public id: string
	public name: string
	public color: FolderColor
	public static getFolderColors = (): IFolderColor => folderColorsObject
}

export enum FolderColor {
	App = 'app',
	Red = 'red',
	Blue = 'blue',
	Green = 'green',
	Yellow = 'yellow',
}
interface IFolderColor {
	app: FolderColor
	red: FolderColor
	blue: FolderColor
	green: FolderColor
	yellow: FolderColor
}

const folderColorsObject: IFolderColor = {
	app: FolderColor.App,
	red: FolderColor.Red,
	blue: FolderColor.Blue,
	green: FolderColor.Green,
	yellow: FolderColor.Yellow,
}
