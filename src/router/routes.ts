interface IRouter {
	notePage: IRoute
	addNotePage: IRoute
}
export interface IRoute {
	to: string
	name: string
}

export const AppRouter: IRouter = {
	notePage: {
		to: '/',
		name: 'Notes',
	},
	addNotePage: {
		to: '/add',
		name: 'Add Notes',
	},
}
