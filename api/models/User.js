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
      unique: true,
      required: true,
    },
    name: {
      type: "string",
      unique: true,
      required: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 8,
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password', 'createdAt', 'updatedAt']);
  },
};
