import { createFactory } from "hono/factory"
import { LevelsDatasource } from "../infrastructure"
import { GetLevelsDto } from "../domain"
import { ErrorHandler } from "../../../../utils"
import { ErrorName } from "../../../../errors"

export class LevelsController {
	private factory = createFactory()
	private readonly levelsDatasource: LevelsDatasource

	constructor(levelsDatasource: LevelsDatasource) {
		this.levelsDatasource = levelsDatasource
	}

	getLevels = this.factory.createHandlers(async (c) => {
		const userId = c.req.param("userId")
		const game = c.req.param("game")

		const [dtoError, getLevelsDto] = GetLevelsDto.create({ userId, game })

		if (dtoError)
			return ErrorHandler.sendErrorResponse(c, ErrorName.INVALID_GAME)

		const [error, levels] = await this.levelsDatasource.getLevels(getLevelsDto)

		if (error) return ErrorHandler.sendErrorResponse(c, error)

		return c.json(levels)
	})
}
