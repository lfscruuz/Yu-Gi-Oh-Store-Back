import db from "../database/db.js";

export const getProductController = async (req, res) => {
    try{

        const products = await db.find()
        res.status(200).send(products)

    }
    catch(err){
        console.log(err)
    }
}