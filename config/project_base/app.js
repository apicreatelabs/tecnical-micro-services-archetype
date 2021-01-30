const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yml');

require('dotenv').config()

const port = process.env.PORT || 3000

const app =  express();

app.use('/',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

app.get('/',(req,res)=>{
    res.json({ message: "Hello World" })
});

app.listen(port,()=>{
    console.log(`Api running port: ${port}`);
})