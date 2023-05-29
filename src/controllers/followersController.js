import {getFollowers} from "../repositories/followers.repository.js"

export async function Followers(req,res){
    try {
        const token = await getFollowers(res.locals.token);
        res.status(201).send(token)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
