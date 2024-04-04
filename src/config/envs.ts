import 'dotenv/config'
import * as joi from 'joi'

interface EnvVars {
	PORT: number
}

// TODO: validar mediante un esquema

const envsSchema = joi.object({
	PORT: joi.number().required()
})
.unknown(true); // esto sirve para que acepte mas variables de entorno que esten por fuera de el envsSchema pero aun asi se mantendra extricto con las que esten dentro

const { error , value } = envsSchema.validate( process.env )

if ( error ) {
	throw new Error(`Config validation error: ${ error.message }`)
}

const envVars: EnvVars = value;
export const envs = {
	port: envVars.PORT
}
