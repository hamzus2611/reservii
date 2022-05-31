var jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('secret');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, secret);
        console.log(decodedToken)
        const userrole = decodedToken.UserRole;
        if (!userrole || userrole != "Organisateur") {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        next();
    } catch (error) {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }

};