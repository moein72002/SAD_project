const jwt = require('jsonwebtoken');

const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const token = req.header('Authorization')?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Access denied' });
        const decodedToken = jwt.decode(token);
        console.log('Decoded Token (roleMiddleware):', decodedToken);

        if (!roles.includes(decodedToken.role)) {
            return res.status(403).json({ message: 'Forbidden: Access is denied.' });
        }
        next();
    };
};

module.exports = roleMiddleware;
