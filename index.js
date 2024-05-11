require('dotenv').config() // Importing env variables
const express = require('express') // Import express module
const app = express() // store this express thing inside a variable 'app'. 
// console.log(app); // express is an object..which has lots wale things inside it..

// Node madhe kahi pan changes kel tr aaplyala server restart krra lagto so that changes reflect hoil
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=> {
    res.send('tanshu.98')
})

app.get('/login', (req, res)=> {
    res.send('<h3>Add Login details</h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// notes - 

// To Deploy node application..mallb yeh ekdum basic wali..for that we use dotenv
// Step 1: Install this package..
// Step 2: create a .env file