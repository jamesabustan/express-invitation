// Const declared //

const express = require("express"); // we need to acquire module and assign as variable
const app = express(); // calls express()as function to EXECUTE the modules
const PORT =  process.env.PORT || 8080; 

// Declared //

app.use(express.urlencoded({extended: false})); // do it ahead of time
app.use(express.static('public')); // make server aware and use of public and views directory
app.use(express.static('views'));  // pre-programmed to located in the location 

//.post() need a route functionality 
// next = .then 
app.post("/express-form", (req, res, next) => {
    let receivedText = req.body.name;
    let receivedMessage = req.body.message;
    let receivedEvent = req.body.event1;

    if (receivedText && receivedEvent && receivedMessage ) {
        let final = receivedText
        let finalMessage = receivedMessage
        let finalEvent = receivedEvent

    res.send(`<h1>Hello there, ${final}. </h1> <br>
     <h3>Can't wait to see you at the ${finalEvent}</h3> <br>
     <p>Here's your message :${finalMessage}</p>`); 
    }
}); 


app.listen(PORT, () =>{
    console.log(`Server is Up and running: ${PORT}`); // use backticks when interpolating strings
})




