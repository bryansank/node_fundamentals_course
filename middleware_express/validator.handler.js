const boomHandler = require('@hapi/boom');

const validatorHandler = (schema, property)=> {
    console.log("validator");
    // clousures.
    return (req, res, next) => {
        const data = req[property];
        // req.body POST
        // req.params GET
        // req.query
        const {error} = schema.validate(data);
        if(error){
            next(boomHandler.badRequest(error));
        }
        next();
    }
}

module.exports = validatorHandler;