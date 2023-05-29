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

    const user = {
        ...userDB.rows[0], // propriedades do usuário
        posts: myPostsDB.rows.map(post => ({
          ...post, // propriedades do post
          likes: 2 // exemplo de propriedade adicional
        }))
      };
    

    return user
}

