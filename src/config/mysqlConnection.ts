import { drizzle } from "drizzle-orm/mysql2"
import { tablesSchemas } from "./schemas"

export const db = drizzle({
	connection: { uri: process.env.DATABASE_URL },

	schema: tablesSchemas,
	mode: "default",
})
