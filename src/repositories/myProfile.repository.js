import { db } from '../database/database.connection.js';

export async function getUserDB(res){
    
    const result = await db.query(`
    SELECT u.*
    FROM users u
    JOIN sessions s ON u.id = s."userId"
    WHERE s.token = $1;
    `,[res]
    )

    return result.rows[0]
}


