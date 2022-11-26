import db from "../database/db.js";

export async function getProducts(req, res) {
    try{
        const products = await db.collection("products").find().toArray();
        res.send(products);
    }
    catch(error){
        console.log(error, "Erro no productsControllers.js na função getProducts");
    }
}

export async function getProduct(req, res) {
    try{
        const product = await db.collection("products").findOne({ _id: req.params.id });
        res.send(product);
    }
    catch(error){
        console.log(error, "Erro no productsControllers.js na parte do getProduct");
    }
}