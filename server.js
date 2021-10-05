const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;


app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

//THE ACTUAL ENDPOINT
app.get('/',function(req,res){
    res.send('ROBERTO, MY APP IS RUNNING!!');
})

app.get('/DATE',function(req,res){
    res.send('2021-10-03');
})

app.get('/FULLNAME',function(req,res){
    res.send('Steve Raymundo Rodríguez Acosta');
})

app.get('/CITY',function(req,res){
    res.send('Monterrey');  
})

app.get('/SCHOOL',function(req,res){
    res.send('TecNM ITNL');
})

app.post('/sum2num',function(req,res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = parseFloat(num1) + parseFloat(num2);

    res.send(result.toString())
});

    app.post('/mult3num',function(req,res){
        let num1 = req.body.num1;
        let num2 = req.body.num2;
        let num3 = req.body.num3;
        let result = num1 * num2 * num3;
    
        res.send(result.toString())
});

app.post('/square',function(req,res){
    let lado1 = req.body.lado1;
    let result = lado1 * lado1;

    res.send(result.toString())
});

app.post( '/triangle' , function( req , res )
{
    let base = req.body.base;
    let altura = req.body.altura;
    let result = (base * altura) / 2;
    
    res.send( result.toString());
});
     
    
        
app.listen(port,function(){
    console.log('MY APP IS WORKING CORRECTLY ' +  port);
})
