/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "string",
      unique: true,
      required: true,
    },
    email: {
      type: "string",
      required: true,
      isEmail: true,
      unique: true,
      custom: function (value) {
        if (!value || typeof value !== "string" || value.length > 8) {
          throw new Error("Invalid email format");
        }
      },
    },

    name: {
      type: "string",
      required: true,
      custom: function (value) {
        if (!value || typeof value !== "string") {
          throw new Error("Invalid name format");
        }
      },
    },
    password: {
      type: "string",
      required: true,
      custom: function (value) {
        if (!value || typeof value !== "string" || value.length <= 8) {
          throw new Error("Password should be at least 8 characters long");
        }
      },
    },

    wallet: {
      collection: "wallet",
      via: "user",
    },
  },
  customToJSON: function () {
    return _.omit(this, ["password", "createdAt", "updatedAt"]);
  },
};
