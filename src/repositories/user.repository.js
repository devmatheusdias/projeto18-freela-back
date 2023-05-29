import { db } from '../database/database.connection.js';

export async function getUser(params){
    const {id} = params;

    const userDB = await db.query(`
        SELECT * FROM users WHERE users.id =$1;
    `,[id]);

    const posts = await db.query(`
    SELECT * FROM posts WHERE posts.userid = $1;`,[id])

    const ifollower = await db.query(`
        SELECT * FROM ifollowers WHERE userid = $1;`, [id]
    );

    let iFollowerIsTrue = true;
    
    if (ifollower.rowCount === 0) {
        iFollowerIsTrue = false
    }

    const user = {...userDB.rows[0], isFollower: iFollowerIsTrue, posts: posts.rows}

    return user
}

export async function insertUser(params){
    const {id} = params;

    const userDB = await db.query(`
        SELECT * FROM users WHERE users.id =$1;
    `,[id]);

    const result = await db.query(`
        INSERT INTO ifollowers(userid, name) values($1, $2);`, [id, userDB.rows[0].name])

    return result;
}




