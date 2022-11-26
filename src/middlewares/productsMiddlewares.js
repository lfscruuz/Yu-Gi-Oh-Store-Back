import { ObjectId } from "mongodb";
import db from "../database/db.js";

export async function checkIfProductExists(req, res, next) {
    const product = await db.collection("products").findOne({ _id: ObjectId(req.params.id) });

    if (!product) {
        res.status(404).send("Produto não encontrado");
        return;
    }

    next();
}

export async function checkIfProductIsInCart(req, res, next) {
    const product = await db.collection("products").findOne({ _id: ObjectId(req.params.id) });

    if (!product.inCart) {
        res.status(400).send("Produto não está no carrinho");
        return;
    }

    next();
}

export async function checkIfProductIsNotInCart(req, res, next) {
    const product = await db.collection("products").findOne({ _id: ObjectId(req.params.id) });

    if (product.inCart) {
        res.status(400).send("Produto já está no carrinho");
        return;
    }

    next();
}
