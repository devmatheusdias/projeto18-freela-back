import { db } from '../database/database.connection.js';

export async function getUserDB(res) {

    const userDB = await db.query(`
    SELECT u.*
    FROM users u
    JOIN sessions s ON u.id = s."userId"
    WHERE s.token = $1;
    `, [res]
    )

    const userPostsDB = await db.query(`
    SELECT *
    FROM posts
    WHERE userid = (SELECT id FROM users WHERE userid = $1);
    `, [userDB.rows[0].id])

    const user = {...userDB.rows[0], posts: userPostsDB.rows}
   console.log(user.posts.length)

    return user
}

