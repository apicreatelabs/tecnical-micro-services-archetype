const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yml');

require('dotenv').config()

const port = process.env.PORT || 3000

const app =  express();

//rutas
const helloRoute =  require('./routes/hello')

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

app.use('/hello',helloRoute);

app.listen(port,()=>{
    console.log(`Api running port: ${port}`);
})