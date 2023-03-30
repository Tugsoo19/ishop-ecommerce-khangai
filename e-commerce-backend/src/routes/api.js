const express = require('express')
const auth = require("../middleware/auth")
const apiRouter = express.Router()

apiRouter.post('/protected', auth, (req, res, next) => {


    res.status(200).json({
        data: "Successfully got the protected route",
    })
})

apiRouter.post('/unprotected', async (req, res) => {


    res.status(200).json({
        data: "Successfully got the unprotected route",
    })
})


module.exports = apiRouter