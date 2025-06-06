import { RegisterUserDto, UserEntity } from "../../domain"
import { BunPasswordAdapter } from "../../../../utils"
import { ErrorName } from "../../../../errors"
import { db, user } from "../../../../config"
import { v4 as uuidv4 } from "uuid"
import { eq } from "drizzle-orm"

export class AuthDatasource {
	async register(
		RegisterUserDto: RegisterUserDto,
	): Promise<[ErrorName, undefined] | [undefined, UserEntity]> {
		const { name, email, password, englishLevel } = RegisterUserDto

		try {
			const exists = await db.query.user.findFirst({
				where: eq(user.email, email),
			})

			if (exists) return [ErrorName.EMAIL_ALREADY_EXISTS, undefined]

			const hashedPassword = await BunPasswordAdapter.hash(password)

			const newUser = await db.insert(user).values({
				id: uuidv4(),
				name,
				email,
				password: hashedPassword,
				englishLevel,
			})

			return [
				undefined,
				new UserEntity(
					String(newUser[0].insertId),
					name,
					email,
					password,
					englishLevel,
				),
			]
		} catch (error) {
			//TODO: log the error with the logger
			// this is magic, cause if we got here it could only be a database error
			console.log(error)
			return [ErrorName.SERVER_ERROR, undefined]
		}
	}
}
