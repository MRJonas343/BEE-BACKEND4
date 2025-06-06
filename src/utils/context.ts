import { Hono } from "hono"
import { auth } from "./auth"

export type AppVariables = {
	user: typeof auth.$Infer.Session.user | null
	session: typeof auth.$Infer.Session.session | null
}

export const createAppHono = () => new Hono<{ Variables: AppVariables }>()

export type AppHono = ReturnType<typeof createAppHono>
