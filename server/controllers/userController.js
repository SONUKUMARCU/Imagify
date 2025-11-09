import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User Registration
const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.json({ success: false, message: "Missing details" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name: fullname,
            email,
            password: hashedPassword
        };

        const newUser = new userModel(userData);
        const user = await userModel.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

        res.json({ success: true, token, user: { name: user.name } });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// User Login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });


        if (!user) {
            return res.json({ success: false, message: "User not found exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
            res.json({ success: true, token, user: { name: user.name } });
        } else {
            return res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}