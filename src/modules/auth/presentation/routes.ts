import { AppHono, auth, createAppHono } from "../../../utils"

export class AuthRoutes {
	static get routes(): AppHono {
		const router = createAppHono()

		router.on(["POST", "GET"], "/api/auth/*", (c) => {
			return auth.handler(c.req.raw)
		})

		return router
	}
}
