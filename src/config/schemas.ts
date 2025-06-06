import { availableLevels } from "./schemas/availableLevels.schema"
import { DragAndDropGame } from "./schemas/games/drag&drop.schema"
import { HangmanGameLevels } from "./schemas/games/hangman.schema"
import { MemoryGameLevels } from "./schemas/games/memoryGame.schema"
import { gameLogs } from "./schemas/game-logs"
import { user, account, session } from "./schemas/users.schema"

export const tablesSchemas = {
	availableLevels,
	user,
	DragAndDropGame,
	HangmanGameLevels,
	MemoryGameLevels,
	gameLogs,
	account,
	session,
}
