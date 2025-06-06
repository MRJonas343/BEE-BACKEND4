import { defineConfig } from "drizzle-kit"

export default defineConfig({
	out: "./migrations",
	dialect: "mysql",
	schema: [
		"./src/config/schemas/availableLevels.schema.ts",
		"./src/config/schemas/game-logs.ts",
		"./src/config/schemas/users.schema.ts",
		"./src/config/schemas/games/drag&drop.schema.ts",
		"./src/config/schemas/games/hangman.schema.ts",
		"./src/config/schemas/games/memoryGame.schema.ts",
	],
	dbCredentials: {
		url: process.env.DATABASE_URL ?? "",
	},
})
