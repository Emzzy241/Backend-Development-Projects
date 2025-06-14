const express = require('express')
const app = express()

const PORT = 8383

let data = ['James']


// MIDDLEWARE
app.use(express.json())

// Type 1 - Website Endpoints (these endpoints are for sending back html and they typically come when a user enters a url in browser)
app.get('/', (req, res) => {
    console.log('User requested the home page website')
    res.send(`
        <body
        style="background:pink; color:blue" >
            
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
            <script>console.log('This is my script')</script>
        </body>    
    `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">Home</a>
        </body>
        
        `)
})

// Type 2 - API Endpoints (non visual, they do not return a website)

app.get('/api/data', (req, res) => {
    console.log('This was for data')
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))