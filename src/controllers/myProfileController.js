import { getUserDB } from "../repositories/myProfile.repository.js";

export async function MyProfile(req,res){
    try {
        const user = await getUserDB(res.locals.token);
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
