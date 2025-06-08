import { eq, and } from "drizzle-orm"
import { db, availableLevels, gameLogs } from "../../../../../config"
import { LevelResponse, GetLevelsDto } from "../../domain"
import { ErrorName } from "../../../../../errors"

export class LevelsDatasource {
	async getLevels(
		getLevelsDto: GetLevelsDto,
	): Promise<[ErrorName, undefined] | [undefined, LevelResponse[]]> {
		try {
			const availableLevelsQuery = await db
				.select()
				.from(availableLevels)
				.where(eq(availableLevels.game, getLevelsDto.game))

			const completedLevelsQuery = await db
				.select()
				.from(gameLogs)
				.where(
					and(
						eq(gameLogs.userId, getLevelsDto.userId),
						eq(gameLogs.game, getLevelsDto.game),
						eq(gameLogs.isCompleted, true),
					),
				)

			const completedLevelsSet = new Set(
				completedLevelsQuery.map((log) => log.level),
			)

			const mergedLevels: LevelResponse[] = availableLevelsQuery.map(
				(level) => ({
					levelName: level.levelName,
					trophies: level.trophies,
					isCompleted: completedLevelsSet.has(level.level),
					level: level.level,
					englishLevel: level.englishLevel,
				}),
			)

			return [undefined, mergedLevels]
		} catch (error) {
			console.log(error)
			return [ErrorName.SERVER_ERROR, undefined]
		}
	}
}
