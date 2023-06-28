const uuid = require("uuid");
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

module.exports = {
  friendlyName: "Register",
  description: "Register user.",
  inputs: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      defaultsTo: "user",
    },
  },
  exits: {
    success: {
      description: "User successfully registered.",
    },
    badRequest: {
      description: "Invalid email or password.",
      responseType: "badRequest",
    },
    serverError: {
      description: "An error occurred while processing the request.",
      responseType: "serverError",
    },
  },
  fn: async function (inputs, exits) {
    try {
      const { name, email, password, role } = inputs;
      const hashedPassword = await hashPassword(password);
      const newUser = {
        uuid: uuid.v4(), // Generate a UUID for the user
        name,
        email,
        password: hashedPassword,
        role,
      };
      const user = await User.create(newUser).fetch();
      return exits.success(user);
    } catch (error) {
      return exits.serverError(error);
    }
  },
};
