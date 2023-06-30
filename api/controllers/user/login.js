const bcrypt = require("bcrypt");

module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {

    email: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    }

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'If all credentials are correct'
    },

    badCombo: {
      statusCode: 401,
      description: 'If wrong credentials'
    }

  },


  fn: async function (inputs, exits) {

    const userRecord = await User.findOne({ email: inputs.email });
    if (!userRecord) {
      return exits.badCombo({
        error: 'Invalid credentials'
      });
    }

    let passwordCheck = bcrypt.compare(inputs.password, userRecord.password);

    if(!passwordCheck) return exits.badCombo({ error: "Password mismatch" });

    const sign_payload = { id: userRecord.id, name: userRecord.name, email: userRecord.email }

    const token = jwToken.sign({user: sign_payload, issuer: "The Sailors"})

    let userTokenRecord = await TokenStore.findOne({ email: inputs.email })

    if (userTokenRecord) {
      await TokenStore.updateOne({ email: inputs.email })
      .set({ token: token.access })
    } 
    if (!userTokenRecord) {
      console.log(userTokenRecord)
      await TokenStore.create({ 
        id: await sails.helpers.uuidGenerator(),
        token: token.access,
        email: userRecord.email,
        toExpire: Date.now() * 1000 // 1h later
      })
    }

    return exits.success({
      message: userTokenRecord ? 
      `${userRecord.email} already has an active token, and will be overwritten` : 
      `${userRecord.email} has logged in`,
      token,
      userRecord,
    });

  }


};
