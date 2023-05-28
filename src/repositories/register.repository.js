import { db } from '../database/database.connection.js';
import bcrypt from 'bcrypt'

export async function createUserDB(body){
    const {name, email, photo, biography, password} = body;

    const passwordHash = bcrypt.hashSync(password, 10)

    const result = await db.query(`
        INSERT INTO users (name, email, photo, biography, password)
            VALUES ($1, $2, $3, $4, $5);`,
            [name, email, photo, biography, passwordHash]
    )
 
    return result
}

export function getUserByEmailDB(email){
    const result = db.query(`SELECT * FROM users WHERE email=$1;`, [email])
    return result;
}