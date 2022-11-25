import db from "../database/db.js"

export async function getProducts(req, res) {
    const products = await db.collection("products").find().toArray();
    res.send(products);
}

export async function getProductById(req, res) {
    const { id } = req.params;
    const product = await db.collection("products").findOne({ _id: ObjectId(id) });
    res.send(product);
}