import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { admin } from "better-auth/plugins"
import { betterAuth } from "better-auth"
import { db } from "../config"

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "mysql",
	}),
	emailAndPassword: {
		enabled: true,
	},
	// socialProviders: {
	// 	github: {
	// 		clientId: process.env.GITHUB_CLIENT_ID as string,
	// 		clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
	// 	},
	// },
	basePath: "/auth/api/auth",
	trustedOrigins: [String(process.env.ORIGIN)],
	plugins: [admin()],
})
