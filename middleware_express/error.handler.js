const res = require("express/lib/response");

const logErrors = (error, req, respo, next)=> {
    console.log("logError");
    console.error(error);
    next(error);
}
// Siempre debe tener los 4 params para que se sepa que es un middleware de tipo error.
const errorHandler = (err, req, respo, next)=> {
    console.log("errorHandler");
    respo.status(500).json({
        message: err.message,
        stack: err.stack,

    });
}

const boomHandlerError = (err, req, respo, next)=> {

    console.log("boomHandlerError");

    // Esta propiedad sale de un error de tipo boom
    if(err.isBoom){
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }

    // respo.status(500).json({
    //     message: err.message,
    //     stack: err.stack,

    // });
}

module.exports = {logErrors, errorHandler, boomHandlerError};