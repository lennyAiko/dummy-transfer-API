/**
 * Wallet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'string',
      required: true,
      unique: true
    },

    balance: {
      type: 'number',
      defaultsTo: 0
    },

    user: {
      model: 'user',
      unique: true
    }

  },
  customToJSON: function () {
    return _.omit(this, ['createdAt', 'updatedAt', 'user']);
  },

};

