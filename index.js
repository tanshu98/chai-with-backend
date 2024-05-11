require('dotenv').config() // Importing env variables
const express = require('express') // Import express module
const app = express() // store this express thing inside a variable 'app'. 
// console.log(app); // express is an object..which has lots wale things inside it..

// Node madhe kahi pan changes kel tr aaplyala server restart krra lagto so that changes reflect hoil
const port = process.env.PORT  // setting the port w.r.to .env variable

const githubData = {
    "login": "tanshu98",
    "id": 46342985,
    "node_id": "MDQ6VXNlcjQ2MzQyOTg1",
    "avatar_url": "https://avatars.githubusercontent.com/u/46342985?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tanshu98",
    "html_url": "https://github.com/tanshu98",
    "followers_url": "https://api.github.com/users/tanshu98/followers",
    "following_url": "https://api.github.com/users/tanshu98/following{/other_user}",
    "gists_url": "https://api.github.com/users/tanshu98/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tanshu98/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tanshu98/subscriptions",
    "organizations_url": "https://api.github.com/users/tanshu98/orgs",
    "repos_url": "https://api.github.com/users/tanshu98/repos",
    "events_url": "https://api.github.com/users/tanshu98/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tanshu98/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tanshu Allewar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 33,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2019-01-03T09:24:39Z",
    "updated_at": "2024-03-26T10:56:54Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=> {
    res.send('tanshu.98')
})

app.get('/login', (req, res)=> {
    res.send('<h3>Add Login details</h3>')
})

app.get('/github', (req,res)=> {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`) 
})


// notes - 

// To Deploy node application..mallb yeh ekdum basic wali..for that we use dotenv
// Step 1: Install this package..
// Step 2: create a .env file