import { AppHono, createAppHono } from "../../../../utils"
import { LevelsController } from "./levels.controller"
import { LevelsDatasource } from "../infrastructure"
import { AuthMiddleware } from "../../../../middlewares"

export class LevelsRoutes {
	static get routes(): AppHono {
		const router = createAppHono()

		const datasource = new LevelsDatasource()
		const controller = new LevelsController(datasource)
		const authMiddleware = new AuthMiddleware()

		//define the main routes of the module level
		router.get(
			"/getLevels/:game",
			authMiddleware.checkAuth,
			...controller.getLevels,
		)

		return router
	}
}
