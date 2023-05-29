import {getUsers} from "../repositories/users.repository.js"

export async function Users(req,res){
    try {
        const token = await getUsers(res.locals.token);
        res.status(201).send(token)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
