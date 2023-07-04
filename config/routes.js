/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // AUTH
  "POST /register": "user/register",
  "POST /login": "user/login",
  "POST /refresh": "user/refresh",
  "POST /forgot": "password/forgot",
  "POST /reset": "password/reset",
  // USER UPDATE
  "GET /user": "user/view",
  "GET /user/wallet": "wallet/view",
  // TRANSFER
  "POST /transfer": "transfer/initiate",
  //ADD MONEY
  "POST /add_money": "add/initiate",
  //TRANSACTION HISTORY
  "GET /transactions": "transactions/history",
};
