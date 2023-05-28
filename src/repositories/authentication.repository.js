import { db } from '../database/database.connection.js';

export async function getToken(token) {
     const result = await db.query('SELECT sessions.token FROM sessions WHERE token = $1;', [token]);
     return result;
   }
   
