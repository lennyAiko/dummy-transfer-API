module.exports = async function (req, res, proceed) {
    if (req.profile.issuer !== sails.config.issuer || process.env.ISSUER) {
        return res.status(401).json('Send a valid token!')
    }
    proceed()
}