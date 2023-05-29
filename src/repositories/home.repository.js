import { db } from '../database/database.connection.js';

export async function getMyPosts(res) {

    const userDB = await db.query(`
    SELECT u.*
    FROM users u
    JOIN sessions s ON u.id = s."userId"
    WHERE s.token = $1;
    `, [res]
    );

    const myPostsDB = await db.query(`
    SELECT * FROM posts WHERE posts.userid = $1;
    `, [userDB.rows[0].id]);
    
    const myPosts = [{...myPostsDB.rows, likes: 2}]

    return myPosts
}

