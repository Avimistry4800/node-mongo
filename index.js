const express = require('express') ;


const app = express();

// function rootCall(req,res) {
//     res.send("Thank you very much")
// }

app.get('/', (req,res) => {
    res.send('Thank you for calling me Wow');
})

app.listen(3000,() =>console.log("listining to port 3000"));