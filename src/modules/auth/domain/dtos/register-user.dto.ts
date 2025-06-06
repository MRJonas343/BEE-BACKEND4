import { ZodError } from "zod"
import { registerUserSchema } from "../../../../validators"


interface RegisterUserDtoI {
	name: string
	email: string
	password: string
	englishLevel: string
}

export class RegisterUserDto {

	public name: string
	public email: string
	public password: string
	public englishLevel: string

	private constructor({ name, email, password, englishLevel }: RegisterUserDtoI) {
		this.name = name
		this.email = email
		this.password = password
		this.englishLevel = englishLevel
	}

	static create(object: { [key: string]: unknown }):
		| [ZodError, undefined]
		| [undefined, RegisterUserDto] {
		const result = registerUserSchema.safeParse(object)

		if (!result.success) return [result.error, undefined]

		const { name, email, password, englishLevel } = result.data

		return [undefined, new RegisterUserDto({ name, email, password, englishLevel })]
	}
}
