import { createUserDB } from '../repositories/register.repository.js'

export async function Register(req, res) {

    try {
        await createUserDB(req.body);
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
