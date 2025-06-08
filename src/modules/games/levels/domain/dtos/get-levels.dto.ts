import { z, ZodError } from "zod"
import { VALID_GAMES } from "../level.entity"

const getLevelsSchema = z.object({
	userId: z.string().min(1, "User ID is required"),
	game: z.enum(["MemoryGame", "hangman"], {
		errorMap: () => ({
			message: `Game must be one of: ${VALID_GAMES.join(", ")}`,
		}),
	}),
})

export class GetLevelsDto {
	private constructor(
		public readonly userId: string,
		public readonly game: string,
	) {}

	static create(
		object: Record<string, unknown>,
	): [ZodError, undefined] | [undefined, GetLevelsDto] {
		const validation = getLevelsSchema.safeParse(object)

		if (!validation.success) {
			return [validation.error, undefined]
		}

		const { userId, game } = validation.data
		return [undefined, new GetLevelsDto(userId, game)]
	}
}
