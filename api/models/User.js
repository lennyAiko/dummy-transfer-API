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
      isEmail: {
        message: 'Please enter a valid email address',
      },
      minLength: {
        minLength: 8,
        message: 'Email address must be at least 8 characters long',
      },
    },
    name: {
      type: "string",
      unique: true,
      required: true,
      minLength: {
        minLength: 8,
        message: 'Name must be at least 8 characters long',
      },
    },
    password: {
      type: "string",
      required: true,
      minLength: {
        minLength: 8,
        message: 'Password must be at least 8 characters long',
      },
    },
    wallet: {
      collection: 'wallet',
      via: 'user'
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password', 'createdAt', 'updatedAt']);
  },
};
