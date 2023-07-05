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
  // USER UPDATE
  "GET /v1/user": "user/view",
  "GET /v1/user/wallet": "wallet/view",
  // TRANSFER
  "POST /v1/transfer": "transfer/initiate",
  //ADD MONEY
  "POST /v1/add_money": "add/initiate",
  //TRANSACTION HISTORY
  "GET /v1/transactions": "transactions/history",
};
