import db from "../database/db.js"
import bcrypt from 'bcrypt';
import alert from 'alert'
import { v4 as uuidV4 } from 'uuid';

// Import Schema
import { userSchema } from "../schemas/userSchema.js";

export async function signup(req, res) {
    const { name, email, password, passwordConfirmation } = req.body;

    const validation = userSchema.validate({
        name,
        email,
        password,
        passwordConfirmation
    });

    // Check if password and passwordConfirmation are the same
    if (password !== passwordConfirmation) {
        res.status(400).send("As senhas não são iguais");
        alert("As senhas não são iguais");
        return
    }

    if (validation.error) {
        res.status(400).send("Formato inválido");
        alert("Formato inválido");
        return
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        const userExists = await db.collection("users").
            findOne
            ({
                email,
                name,
                password: encryptedPassword,
                passwordConfirmation: encryptedPassword
            });

        if (userExists) {
            res.status(409).send("Usuário já cadastrado");
            alert("Usuário já cadastrado");
            return
        }

        const result = await db.collection("users").insertOne({
            name,
            email,
            password: encryptedPassword,
            passwordConfirmation: encryptedPassword
        });

        res.status(201).send({ id: result.insertedId, name, email });

    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor");
        alert("Erro no servidor");
        return
    }
}

export async function postLogin(req, res) {

    //req vem do middleware
    const {name, _id} = req.user;
    const token = uuidV4();
    const session = {
        name: name,
        token,
        userId: _id
      }
    try {
        await db.collection("sessions").insertOne(session)
        return res.send({ token, name });
    } catch (error) {
        return res.sendStatus(500);
    }
}