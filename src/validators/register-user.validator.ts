import { z } from "zod"

export const registerUserSchema = z.object({
	name: z.string().nonempty(),
	email: z.string().email().toLowerCase(),
	password: z.string().min(8),
	englishLevel: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
})
