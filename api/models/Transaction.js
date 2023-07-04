/**
 * Transactions.js
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

    amount: {
      type: "number",
      required: true,
    },

    description: {
      type: "string",
      maxLength: 250,
    },

    wallet: {
      model: "wallet",
    },
  },
  customToJSON: function () {
    return _.omit(this, ["createdAt", "updatedAt", "user"]);
  },
};
