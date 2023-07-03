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
      type: 'string',
      required: true,
      isEmail: true,
      maxLength: 8,
      example: 'example@example.com',
    },
    name: {
      type: 'string',
      required: true,
      minLength: 8,
      example: 'John Doe',
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8,
      example: 'John Doe',
    },
    wallet: {
      collection: 'wallet',
      via: 'user'
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password', 'createdAt', 'updatedAt']);
  },
  customMessages: {
    // Custom error messages
    email: {
      required: 'Email is required',
      isEmail: 'Invalid email format',
      maxLength: 'Email must not exceed 8 characters',
    },
    name: {
      required: 'Name is required',
      minLength: 'Name must be at least 8 characters long',
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 8 characters long',
    },
  },
};
