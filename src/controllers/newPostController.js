import { createPostDB } from "../repositories/newPost.repository.js";

export async function NewPost(req,res){
    try {
        const post = await createPostDB(req.body, res.locals.token);
        res.status(201).send(post)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
