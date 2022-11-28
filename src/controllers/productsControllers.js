import db from "../database/db.js";

export async function getProducts(req, res) {
    try{
        const products = await db.collection("products").find().toArray();
        res.send(products);
    }
    catch(error){
        console.log(error)
    }
}

export async function getProduct(req, res) {
    try{
        const product = await db.collection("products").findOne({ _id: req.params.id });
        res.send(product);
    }
    catch(error){
        console.log(error)
    }
}

export async function addToCart(req, res){
    const product = req.product;
    const session = req.session;
    const purchase = {
        productId: product._id,
        index: product.index,
        category: product.category,
        image: product.image,
        name: product.name,
        price: product.price,
        userId: session.userId
    }
    try {
        await db.collection("carts").insertOne(purchase)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

export async function removeFromCart(req, res){
    const product = req.product;

    try {
        await db.collection("carts").deleteOne({productId: product._id})
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

export async function showCart(req, res){
    const session = req.session;

    try {
        const user = await db.collection("users").findOne({_id: session.userId});
        const cart = await db.collection("carts").find({userId: user._id}).toArray();
        res.send(cart)
    } catch (error) {
        return res.sendStatus(500);
    }

}