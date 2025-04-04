import User from "../models/user.model.js";


export const signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        //Waiting for handle email pattern
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            name,
            email,
            password,
            role
        });

        res.status(201).json({ user, message: "User created successfully" })
    } catch (error) {
        console.log("Error in signup controller", error.message);
		res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    res.send("login")
}

export const logout = async (req, res) => {
    res.send("logout")
}