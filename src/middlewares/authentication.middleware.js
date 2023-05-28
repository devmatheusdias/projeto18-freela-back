import { getToken } from "../repositories/authentication.repository.js";

export async function authentication(req, res, next) {
    const { authorization } = req.headers;
    
    const token = authorization?.replace('Bearer', '').trim()

    try {

        if (!token) return res.status(401).send('Nao recebemos o token')

        const session = await getToken(token)

        if (session.rowCount === 0) return res.status(402).send({ message: "Não existe esta sessao" });

        res.locals.token = session.rows[0].token

        next()

    } catch (error) {
        res.status(500).send(error.message)
    }
}