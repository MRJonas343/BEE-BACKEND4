import { AppHono, createAppHono } from "../../../../utils"
import { LevelsController } from "./levels.controller"
import { LevelsDatasource } from "../infrastructure"

export class LevelsRoutes {
	static get routes(): AppHono {
		const router = createAppHono()

		const datasource = new LevelsDatasource()
		const controller = new LevelsController(datasource)

		//define the main routes of the module level
		router.get("/getLevels/:userId/:game", ...controller.getLevels)

		return router
	}
}
