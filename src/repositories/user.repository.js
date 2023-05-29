import { db } from '../database/database.connection.js';

export async function getUser(params){
    const {id} = params;

    const userDB = await db.query(`
        SELECT * FROM users WHERE users.id =$1;
    `,[id]);

    const posts = await db.query(`
    SELECT * FROM posts WHERE posts.userid = $1;
    `, [id])

    const user = {...userDB.rows[0], posts: posts.rows}

    return user;
}


