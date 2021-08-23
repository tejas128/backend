
const { create, getaallpost } = require("./services")



exports.createpost = (req, res) => {
    console.log(req.file)

    create(req, (err, results) => {

        if (err) {
           

            return res.status(500).json({
                success: 0,
                message: 'server error'
            })
        }
        res.status(200).json({
            success: 1,
            message: "post created"
        })
    })
}
exports.getposts = (req, res) => {
    getaallpost((err, results) => {
        if (err) {
            return res.status("500").json({
                success: 0,
                message: 'server error'
            })
        }
        res.status(200).json({
            success: 1,
            results
        })
    })
}