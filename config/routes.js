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
  "POST /v1/register": "user/register",
  "POST /v1/login": "user/login",
  "POST /v1/refresh": "user/refresh",
  "POST /v1/forgot": "password/forgot",
  "POST /v1/reset": "password/reset",
  // USER
  "GET /v1/user": "user/view",
  "GET /v1/user/wallet": "wallet/view",
  // TRANSFER
  "POST /v1/transfer": "wallet/transfer",
  //ADD MONEY
  "POST /v1/add_money": "wallet/add",
  //TRANSACTION HISTORY
  "GET /v1/transactions": "wallet/history",
};
