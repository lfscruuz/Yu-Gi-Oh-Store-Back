import db from "../database/db.js"

async function userMiddlewares(req, res, next) {
  
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

    res.locals.user = user;
    res.locals.session = session;
    res.locals.token = token;

    next();

  } catch (err) {
    res.sendStatus(500);
    console.log(err, 'Erro no middleware');
  }
}

export default userMiddlewares;