import { AppHono, auth, createAppHono } from "../utils"
import { cors } from "hono/cors"
import { serve } from "bun"

interface Options {
	routes: AppHono
	origin: string
	port?: number
}

export class Server {
	public readonly app = createAppHono()
	private readonly routes: AppHono
	private readonly origin: string
	private readonly port: number

	constructor({ port = 3000, routes, origin }: Options) {
		this.port = port
		this.routes = routes
		this.origin = origin
	}

	async start() {
		this.app.use(
			"*",
			cors({
				origin: this.origin,
				allowHeaders: ["Content-Type", "Authorization"],
				allowMethods: ["POST", "GET", "OPTIONS"],
				exposeHeaders: ["Content-Length"],
				maxAge: 600,
				credentials: true,
			}),
		)

		this.app.use("*", async (c, next) => {
			const session = await auth.api.getSession({ headers: c.req.raw.headers })

			if (!session) {
				c.set("user", null)
				c.set("session", null)
				return next()
			}

			c.set("user", session.user)
			c.set("session", session.session)
			return next()
		})

		this.app.route("/", this.routes)

		console.log(`🚀 Server running on http://localhost:${this.port}`)
		serve({
			fetch: this.app.fetch,
			port: this.port,
		})
	}
}
