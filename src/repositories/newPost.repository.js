import { db } from '../database/database.connection.js';

export async function createPostDB(body, res) {
    const { image, description } = body;

    const userId = await db.query(`
    SELECT u.*
    FROM users u
    JOIN sessions s ON u.id = s."userId"
    WHERE s.token = $1;
    `, [res]
    )

    const result = await db.query(`
    INSERT INTO posts (description, photo, userid)
    VALUES ($1, $2, $3);`,
        [description, image, userId.rows[0].id]
    )

    return userId
}


