const User = require('../models/User');

const register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        user.posts = [];
        user.save()
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    register,
};