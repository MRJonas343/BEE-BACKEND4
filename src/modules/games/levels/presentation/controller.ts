import { createFactory, Factory } from "hono/factory"

export class LevelsController {
	private factory : Factory = createFactory()

	//DI
	constructor() {}

	getLevel = this.factory.createHandlers(async (c) => {
		return c.json({ message: "Hello World" })
	})
}
