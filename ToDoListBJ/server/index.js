const express = require('express')

const app = express();
app.use(cors)
const port = 3001;

app.get('/default',(req,res) => {
    res.send("Hello,это наш ToDoList server")
})

app.get('/hell0/:name',(req, res)=>{
    const name = req.params.name
    res.send(`Hi,${name}!`)
})

app.listen(port, ()=>{
    console.log(`Server start working на http://localhost:${port}`)
})