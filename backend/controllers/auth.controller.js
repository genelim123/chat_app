export const signup = async (req, res) => {
    try {
        const {fullName, userName, password, confirmedPassword,gender} = req.body;
    } catch (error) {
        console.log(error);
    }
};

export const login = (req, res) => {
    console.log("loginUser");
    res.send("LoginUser");
};

export const logout = (req, res) => {
    console.log("logoutUser");
    res.send("logoutUser");
};