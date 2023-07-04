module.exports = {
  friendlyName: "History",

  description: "Transaction history.",

  exits: {
    success: {
      statusCode: 200,
      description: "Transaction history retrieved successfully.",
    },
    notFound: {
      statusCode: 404,
      description: "User wallet not found.",
    },
    error: {
      statusCode: 400,
      description: "An error occurred while fetching transaction history.",
    },
  },

  fn: async function (_, exits) {
    try {
      const userId = this.req.profile.data.id;

      const user = await User.findOne({ id: userId }).populate("wallet");

      console.log("User:", user);

      if (!user || !user.wallet || user.wallet.length === 0) {
        throw new Error("User wallet not found.");
      }

      const walletId = user.wallet[0].id;

      console.log("Wallet ID:", walletId);

      const transactions = await Transaction.find({ wallet: walletId });

      console.log("Transactions:", transactions);

      const formattedTransactions = transactions.map((transaction) => {
        return {
          id: transaction.id,
          amount: transaction.amount,
          date: transaction.createdAt,
        };
      });

      return exits.success({ transactions: formattedTransactions });
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while fetching transaction history.");
    }
  },
};
