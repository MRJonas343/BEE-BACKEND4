import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"
;(() => {
	main()
})()

async function main() {
	const port = Number(process.env.PORT)
	const origin = String(process.env.ORIGIN)

	new Server({ port, routes: AppRoutes.routes, origin }).start()
}
