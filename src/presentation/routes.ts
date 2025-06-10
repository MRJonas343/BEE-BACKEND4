import { LevelsRoutes } from "../modules/games/levels/presentation"
import { AuthRoutes } from "../modules/auth/presentation"
import { AppHono, createAppHono } from "../utils"

export class AppRoutes {
	static get routes(): AppHono {
		const router = createAppHono()

		router.get("/", (c) => c.json({ message: "Welcome to the BEESMRT API" }))

		router.route("/auth", AuthRoutes.routes)

		router.route("/levels", LevelsRoutes.routes)

		return router
	}
}
