// ES Model
import  express,{Application,Request,Response} from "express";
import data from "./data.json"
const app:Application= express();
// let data = require('./data.json')


// READ
app.get('/users',(req:Request, res:Response) => {

    res.json({data})
})

let names:string= "bader";

// READ Fetch
app.get('/users',(req:Request, res:Response) => {
 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => res.send(json))
    
  
})
app.get('/photo',(req:Request, res:Response) => {

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => res.json(json))
    // json.map((photos: any, index: any) => (
       
    //   res.send(" <h1>photos.title</h1>")
    // ));
       
    
  
})

// DELETE
app.delete('/users',(req, res) => {
    // delete data[0];
    let del = data.pop();
    console.log(data);
    res.json(del)
})

// UPDATE
app.put('/users/:id/:name/:age',(req, res) => {
    
    data[req.params.id].name=data[req.params.id].name=req.params.name;
    data[req.params.id].age=data[req.params.id].age=req.params.age;

    console.log(data);
    res.json(data)
})

// CREAT
app.post('/users',(req, res) => {
    
    let add = data.unshift({ name: 'amar', age: 27 });
    console.log(data);
    res.json(add);
})

app.put('/user/:id/:name', (req, res) => {

    

    if(data[req.params.id] == undefined) {

        res.status(404).json({"message":"This id is not found"});

    } else {

        data[req.params.id].name = req.params.name;
     

        res.status(200).json(data);
    }
})

app.listen(3000, () => console.log("Server Started"));

