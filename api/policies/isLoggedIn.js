module.exports = async function (req, res, proceed) {
    console.log(req)
    proceed()
}