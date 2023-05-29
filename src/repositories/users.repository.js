import { db } from '../database/database.connection.js';

export async function getUsers(res){

    const users = await db.query(`
        SELECT * FROM users
    `)

    return users.rows;

}


