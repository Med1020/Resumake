const jwt = require('jsonwebtoken');

// Generate Access Token (Short-lived)
const generateAccessToken = (user) => {
    return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

// Generate Refresh Token (Long-lived)
const generateRefreshToken = (user) => {
    return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

// Middleware for Refresh Token Handling
const refreshTokenHandler = (req, res) => {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Forbidden' });

        const accessToken = generateAccessToken(user);
        res.json({ accessToken });
    });
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    refreshTokenHandler
};
