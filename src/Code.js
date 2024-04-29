
const express=require('express')
const {MongoClient} = require('mongodb');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors')
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

var url = "mongodb://localhost:27017/";
app.post("/QuestionInsert", async function(req, res1) {
    try {
        const question = req.body;
        console.log("Input: ", question);

        const url = 'mongodb://127.0.0.1:27017';
        const client = new MongoClient(url);
        const database = 'Devforge';

        await client.connect();
        const db = client.db(database);
        
        const collection = db.collection('Questions');
        const result = await collection.insertOne(question);

        if (result.insertedCount === 0) {
            throw new Error("Failed to insert data.");
        }

        console.log("Data inserted successfully");

        res1.send("<h1>Data Inserted successfully</h1>");
    } catch (error) {
        console.error("Error:", error);
        res1.status(500).send("Failed to insert data.");
    } 
});
   

app.listen(8000,function(){
    console.log("Server is running on port number 8000")
})
