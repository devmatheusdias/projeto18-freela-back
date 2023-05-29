import {getUser, insertUser} from "../repositories/user.repository.js"

export async function User(req,res){

    try {
        const token = await getUser(req.params);
        res.status(201).send(token)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function insertFollower(req,res){

    try {
        const token = await insertUser(req.params);
        res.status(201).send(token)
    } catch (error) {
        res.status(500).send(error.message)
    }
}