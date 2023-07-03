module.exports = {
    transferFunds: async function (req, res) {
      try {
        // Retrieve necessary data from the request
        const { recipientEmail, amount } = req.body;
  
        // Retrieve sender wallet record
        const senderWallet = await Wallet.findOne({ user: req.user.id });
  
        // Check if sender wallet exists
        if (!senderWallet) {
          return res.status(400).send('Sender wallet not found');
        }
  
        // Retrieve recipient user record based on the email
        const recipientUser = await User.findOne({ email: recipientEmail }).populate('wallet');
  
        // Check if recipient user exists
        if (!recipientUser) {
          return res.status(400).send('Recipient user not found');
        }
  
        // Retrieve recipient wallet record
        const recipientWallet = recipientUser.wallet;
  
        // Check if sender has sufficient balance
        if (senderWallet.balance < amount) {
          return res.status(400).send('Insufficient balance');
        }
  
        // Perform the fund transfer
        senderWallet.balance -= amount;
        recipientWallet.balance += amount;
  
        // Update sender and recipient wallets in the database
        await Promise.all([
          Wallet.updateOne({ id: senderWallet.id }).set(senderWallet),
          Wallet.updateOne({ id: recipientWallet.id }).set(recipientWallet),
        ]);
  
        return res.status(200).send('Funds transferred successfully');
      } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while transferring funds');
      }
    },
  };
  