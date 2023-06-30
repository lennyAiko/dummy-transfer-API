module.exports = async function (req, res, proceed) {
    if (req.profile.issuer !== "The Sailors") {
        return res.status(401).json('Send a valid token!')
    }
    proceed()
}