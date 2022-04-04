const Joi = require('joi');

const id  = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
// abortEarly = false es para errores en cambote

const createshemaProduct = Joi.object({
    name: name.required(),
    price: price.required(),
});

const getshemaProduct = Joi.object({
    id: id.required()
});

module.exports = {createshemaProduct, getshemaProduct}