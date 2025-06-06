import { AppHono, auth, createAppHono } from "../../../utils"
import { AuthController } from "./auth.controller"
import { AuthDatasource } from "../infrastructure"

export class AuthRoutes {
	static get routes(): AppHono {
		const router = createAppHono()

		const dataSource = new AuthDatasource()

		const controller = new AuthController(dataSource)

		//Login with better-auth
		router.on(["POST", "GET"], "/api/auth/*", (c) => {
			return auth.handler(c.req.raw)
		})

		//	router.post("/register", ...controller.registerUser)

		return router
	}
}
