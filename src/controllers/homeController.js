import {getMyPosts} from "../repositories/home.repository.js"

export async function Home(req,res){
    try {
        const posts = await getMyPosts(res.locals.token);
        res.status(201).send(posts)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
