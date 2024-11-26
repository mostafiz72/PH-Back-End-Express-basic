const express = require('express')
const cors = require('cors')  /// font and backend er connection add kore dei 
const app = express()
const port = process.env.PORT || 5000; // default port number kono user jodi onno kort chalu korte chai taile browser process.env.port theke take ekta port chalu kore dibe

/// middleware use all methods of express js

app.use(cors());  //  cors k middleware bola hoy ata font and backend serven er connection add kore dei
app.use(express.json());  /// font-end theke pathano data accept kore and data access kore


const user = [
    {id: 1, name: "John", age: 25},
    {id: 2, name: "Jane", age: 30},
    {id: 3, name: "Mike", age: 28},
]

app.get("/", (req, res)=>{
    res.send("Welcome to my API")
})
app.get("/user", (req, res)=>{
    res.status(200).send(user)
})


app.post("/user", (req, res)=>{
    console.log("Post api request hitting....");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length + 1;  /// new id create kore dei and ager j id number thakbe tar sate 1 jog kore dei
    user.push(newUser)  // nuton user er datar sate ager datar add kre dei
    res.send(newUser)  // alll data abar font er e pass kore dei and sei data amara UI te show koraite pari
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`) /// optional server ta thik moto kaj kortese naki se dekhai console log a
})
