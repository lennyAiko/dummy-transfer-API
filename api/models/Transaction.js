module.exports = {
  attributes: {
    id: {
      type: "string",
      unique: true,
      required: true,
    },
    sender: {
      model: "user",
      required: true,
    },
    receiver: {
      model: "user",
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
