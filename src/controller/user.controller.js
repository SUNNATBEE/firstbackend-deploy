const User = require("../models/user.model");

exports.createUser = async (req, res) => {
    try {
        const {name, surname, age} = req.body;
        const newuser = new User({name, surname, age});
        await newuser.save();

        res.status(201).json({message: "User yaraldi"})
    } catch (error) {
        res.status(500).json({message: "Xatalik bor"})
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Xatalik bor"})
    }
}