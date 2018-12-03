const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test',test)

async function test(req,res,next){
    console.log(req.body)
    console.log("disini")
    res.send("hai")
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))