import {v4 as uuidV4} from "uuid";

export async function postLogin(req, res){
    const {email, password} = req.body;
    const token = uuidV4();

    res.send({token, email, password});
}