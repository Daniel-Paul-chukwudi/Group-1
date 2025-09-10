const usermodel = require("../model/user");

exports.createUser = async (req, res) => {
  try {
    const { firstName, email, gender, age } = req.body;
    const user = await usermodel.create({
      firstName,
      email,
      gender,
      age,
    });
    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Unexpected server error", error: message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await usermodel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "User deleted successfully", data: result });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Unexpected server error", error: message });
  }
};
