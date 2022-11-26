import { ObjectId } from "mongodb";
import db from "../database/db.js";

export async function validateProduct(req, res, next) {
  const { _id } = req.params;

    if (!ObjectId.isValid(_id)) {
      return res.status(400).send({ error: "Invalid id" });
    }

    try{
        const product = await db.collection("products").findOne({ _id: ObjectId(_id) });

        if (!product) {
            return res.status(404).send({ error: "Product not found" });
            }
            
        req.locals.product = product;
        next();
    } catch (error) {
        return res.status(500).send({ error: "Internal server error" });
    }
}

export async function validateProductBody(req, res, next) {
    const { categoryId } = req.body;

    if (!ObjectId.isValid(categoryId)) {
        return res.status(400).send({ error: "Invalid id" });
    }

    try{
        const category = await db.collection("products").findOne({ category: ObjectId(category) });

        if (!category) {
            return res.status(404).send({ error: "Category not found" });
        }

        res.locals.category = category;
        next();
    } catch (error) {
        return res.status(500).send({ error: "Internal server error" });
    }
}