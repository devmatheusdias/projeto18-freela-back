import { db } from '../database/database.connection.js';
import {v4 as uuid} from 'uuid'

export async function createSessionDB(res){

    const token = uuid();

    const result = await db.query(`
        INSERT INTO sessions ("userId", token)
            VALUES ($1, $2);`,
            [res, token])
 
    return token
}


