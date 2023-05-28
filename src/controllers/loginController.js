import {createSessionDB} from "../repositories/login.repository.js"

export async function Login(req,res){
    try {
        const token = await createSessionDB(res.locals.userId);
        res.status(201).send(token)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
