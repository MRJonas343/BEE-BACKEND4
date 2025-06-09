import { Session, User } from "better-auth/types"
import { Context } from "hono"
import { ErrorName } from "../errors"
import { ErrorHandler } from "../utils"
import { createFactory } from "hono/factory"

export class AuthMiddleware {
	private factory = createFactory()

	checkAuth = this.factory.createMiddleware(async (c: Context, next) => {
		const user = c.get("user") as User
		const session = c.get("session") as Session

		if (!user || !session)
			return ErrorHandler.sendErrorResponse(c, ErrorName.UNAUTHORIZED_ERROR)

		return next()
	})
}
