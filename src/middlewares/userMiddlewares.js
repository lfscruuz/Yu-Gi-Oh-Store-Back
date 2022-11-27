import db from "../database/db.js";
import bcrypt from 'bcrypt';

async function sessionMiddleware(req, res, next) {
  
  //Token
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
    const session = await db.collection("sessions").findOne({ token });

    if (!session) {
      res.sendStatus(401);
      console.log('Token inválido');
      return;
    }

    const user = await db.collection("users").findOne({ _id: session.userId });
    
    if (!user) {
      res.sendStatus(401);
      console.log('Usuário não encontrado');
      return;
    }

    req.session = session;

    next();

  } catch (err) {
    res.sendStatus(500);
    console.log(err, 'Erro no middleware');
  }
}

async function loginMiddleware(req, res, next){
  const {email, password} = req.body;

  const user = await db.collection("users").findOne({email: email});
  if (!user){
    return res.status(401).send("usuário não cadastrado");
  }
  const comparePasswords = bcrypt.compare(password, user.password);
  if (!comparePasswords){
    return res.status(401).send("senha inválida");
  }
  
  req.user = user;

  next();
}

export {
  sessionMiddleware,
  loginMiddleware
};