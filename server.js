const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const { isInvalidEmail, isEmptyPayload } = require('./validator')

const url = 'mongodb://mongo:27017/Company_DB'
const client = new MongoClient(url)
const dbName = 'Company_DB'
const dbColl = 'Employee_Information'


app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', async function(req, res) {
    response = {
        name: "Harry Cotter",
        email: "harry@hogwarts.com",
        interests: "fishing, spellcasting"
    }

    //connect to mongodb
    await client.connect()
    console.log("Connected successfully to server")

    //initiate or connect to mongodb
    const db = client.db(dbName)
    const collection = db.collection(dbColl)

    //get data from mongodb
    const result = await collection.findOne({id: 1})
    console.log(result)
    client.close()

    response = {}

    if (result !== null) {
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests
        }
    }
        
    res.send(response)
})

app.post('/update-profile', async function(req, res) {
    const payload = req.body
    console.log(payload)

    if ( isEmptyPayload(payload) || isInvalidEmail(payload)) {
        res.send({error: "empty payload. Couldn't update user profile data"})
    } else {

        //connect to mongodb
        await client.connect()
        console.log("Connected successfully to server")
    
        //inititate the database
        const db = client.db(dbName)
        const collection = db.collection(dbColl)
    
        //save payload data to mongodb
        payload['id'] = 1;
        const updatedValue = { $set: payload }
        await collection.updateOne({id: 1}, updatedValue, {upsert: true});


        res.send({info: "user profile data updated successfully"})
    }
})

const server = app.listen(3000, function () {
    console.log("app listening on port 3000")
})


module.exports = {
    app,
    server
}