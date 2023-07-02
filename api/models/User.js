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
      minLength: 8, // Set the minimum length as an integer
      example: 'John Doe',
    },
    
    password: {
      type: 'string',
      required: true,
      minLength: 8, // Set the minimum length as an integer
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
};
