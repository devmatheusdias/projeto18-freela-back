import { db } from '../database/database.connection.js';

export async function getFollowers(res){

    const users = await db.query(`
        SELECT * FROM users
    `)

    return users.rows;

}


