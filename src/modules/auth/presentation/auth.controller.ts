import { AuthDatasource } from "../infrastructure"
import { ErrorHandler } from "../../../utils"
import { createFactory } from "hono/factory"
import { RegisterUserDto } from "../domain"


export class AuthController {
	private factory = createFactory()
	private readonly authDatasource: AuthDatasource

	constructor(authDatasource: AuthDatasource) {
		this.authDatasource = authDatasource
	}

	registerUser = this.factory.createHandlers(async (c) => {
		const body = await c.req.json()

		const [dtoError, registerUserDto] = RegisterUserDto.create(body)

		if (dtoError) return ErrorHandler.sendErrorResponse(c, ErrorHandler.findFirstZodError(dtoError))

		const [registerError, user] = await this.authDatasource.register(registerUserDto)

		if (registerError) return ErrorHandler.sendErrorResponse(c, registerError)


		return c.json({
			message: "User created successfully",
			user: user
		})
	})

}
