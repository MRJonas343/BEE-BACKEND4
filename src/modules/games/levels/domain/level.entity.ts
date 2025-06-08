export interface Level {
	id: number
	englishLevel: string
	levelName: string
	game: string
	level: string
	trophies: number
}

export interface CompletedLevel {
	id: number
	level: string
	game: string
	userId: string
	isCompleted: boolean
}

export interface LevelResponse {
	levelName: string
	trophies: number
	isCompleted: boolean
	level: string
	englishLevel: string
}

export type GameType = "MemoryGame" | "hangman"

export const VALID_GAMES: GameType[] = ["MemoryGame", "hangman"]

export const isValidGame = (game: string): game is GameType => {
	return VALID_GAMES.includes(game as GameType)
}
