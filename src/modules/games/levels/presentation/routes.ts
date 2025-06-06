import { AppHono, createAppHono } from "../../../../utils"
import { LevelsController } from "./controller"

export class LevelsRoutes {
	static get routes(): AppHono {
		const router = createAppHono()
		const controller = new LevelsController()

		//define the main routes of the module level
		router.get("/getLevel", ...controller.getLevel)

		return router
	}
}
