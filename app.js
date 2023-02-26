const express = require("express");
const app = express();
//app.method(path,handler)

const fun1 = (req, res, next) => {
    console.log("hello");
    next();
};
const fun2 = (req, res) => {
    res.status(200).send("<h1>GET From another Function </h1>");
};



const auth = (req, res,next) => {
    if (req.query.user == 'true') {
        next();
        res.send("You Are Admin")
    }
    else {
        res.send("You are not Admin")
    }
}

// LAB 3
// app.get('/users', (req, res) => {
//     // let user = req.query.user;
//     if (req.query.user == 'true') {
//         res.send("You Are Admin")
//     }
//     else {
//         res.send("You are not Admin")
//     }

// })



//Use
// app.use()

//GET Methoed
app.get("/", fun1, fun2);
//LAB Calcueter
//add
app.get("/add/:num1/:num2",auth ,(req, res,next) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let result = num1 + num2;

    res.send("The Sum is : " + result);
});
// sub
app.get("/sub/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let result = num1 - num2;
    res.send("The Sub is : " + result);

});
// mul
app.get("/mul/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let result = num1 * num2;
    res.send("The mul is : " + result);

});
// div
app.get("/div/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let result = num1 / num2;
    res.send("The div is : " + result);

});
//--------------------------------------------------------------
//POST
app.post("/", (req, res) => {
    res.status(200).send("<h1>POST</h1>");
});
//PUT
app.put("/", (req, res) => {
    res.status(200).send("<h1>PUT</h1>");
});
//DELETE
app.delete("/", (req, res) => {
    res.status(200).send("<h1>DELETE</h1>");
});

app.listen(3000, () => console.log("Server Started"));
