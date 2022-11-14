const crypto = require('crypto')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = 6614

app.use(bodyparser.json())

const signMessage = (a, b, c) => {
    return crypto.createHmac(a).update(`${b};${c};${a}`).digest('base64')
}

app.post('/signature', function (req, res) {
    try {
        const { username, password } = req.body
        const timestamp = Date.now()
        response.json({RET: signMessage(timestamp, username, password)})
        
    } catch (e) {
        console.log(e)
        res.statusCode(403).json({ CatchedError: e })
    }

})

app.listen(port, () => console.log(`Server is running on ${port}`))