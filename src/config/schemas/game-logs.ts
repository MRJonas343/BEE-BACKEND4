import { mysqlTable, serial, varchar, boolean } from "drizzle-orm/mysql-core"
import { user } from "./users.schema"

export const gameLogs = mysqlTable("GameLogs", {
	id: serial("id").primaryKey(),
	level: varchar("level", { length: 9 }).notNull(),
	game: varchar("game", { length: 25 }).notNull(),
	userId: varchar("userId", { length: 36 })
		.notNull()
		.references(() => user.id),
	isCompleted: boolean("isCompleted").notNull(),
})
