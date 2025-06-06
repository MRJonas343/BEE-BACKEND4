import { ContentfulStatusCode, StatusCode } from "hono/utils/http-status" // Fix the import statement
import { errorCodeMap, ErrorName, zodErrorsMap } from "../errors"
import type { Context } from "hono"
import { ZodError } from "zod"

/**
 * Class to handle sending error responses and finding the first Zod error
 */
export class ErrorHandler {
	static sendErrorResponse(c: Context, errorName: ErrorName, error?: Error) {

		if (error) {
			//this could be good place to log the error
			//and save the error in a good place
			//TODO: Create a logger
		}

		const errorCode =
			(errorCodeMap[errorName] as StatusCode) || (500 as StatusCode)
		return c.json(
			{ error: errorName },
			errorCode as unknown as ContentfulStatusCode,
		)
	}

	static findFirstZodError(error: ZodError): ErrorName {
		const firstError = error.errors.find(
			(err) =>
				typeof err.path[0] === "string" &&
				zodErrorsMap.has(err.path[0] as string),
		)

		if (firstError && typeof firstError.path[0] === "string") {
			return zodErrorsMap.get(firstError.path[0] as string) as ErrorName
		}

		return ErrorName.INVALID_CREDENTIALS
	}
}
