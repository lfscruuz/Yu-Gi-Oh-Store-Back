import joi from 'joi';

export const userSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    passwordConfirmation: joi.ref('password'),
});