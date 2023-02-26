"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ES Model
const express_1 = __importDefault(require("express"));
const data_json_1 = __importDefault(require("./data.json"));
const app = (0, express_1.default)();
// let data = require('./data.json')
// READ
app.get('/users', (req, res) => {
    console.log("BADERR");
    res.json({ data: data_json_1.default });
});
// DELETE
// app.delete('/users',(req, res) => {
//     // delete data[0];
//     let del = data.pop();
//     console.log(data);
//     res.json(del)
// })
// // UPDATE
// app.put('/users/:id/:name/:age',(req, res) => {
//     data[req.params.id].name=data[req.params.id].name=req.params.name;
//     data[req.params.id].age=data[req.params.id].age=req.params.age;
//     console.log(data);
//     res.json(data)
// })
// // CREAT
// app.post('/users',(req, res) => {
//     let add = data.unshift({ name: 'amar', age: 27 });
//     console.log(data);
//     res.json(add);
// })
// app.put('/user/:id/:name', (req, res) => {
//     if(data[req.params.id] == undefined) {
//         res.status(404).json({"message":"This id is not found"});
//     } else {
//         data[req.params.id].name = req.params.name;
//         res.status(200).json(data);
//     }
// })
app.listen(3000, () => console.log("Server Started"));
