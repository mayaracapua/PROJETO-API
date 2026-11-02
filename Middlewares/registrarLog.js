export default function registrarLog(req, res, next) {

    console.log(`${req.method} ${req.originalUrl}`);

    next();

}