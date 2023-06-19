const express = require('express')
const app = express()
const port = 3000;

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
      info: {
        title: 'Dialog API',
        description: 'Dialog API Information',
        contact: {
          name: 'Developer Name',
        },
        servers: ['http://localhost:3000'],
      },
    },
    apis: ['./routes/DialogRoutes.js'],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', require('./routes/routes'))

app.listen(port, console.log("Listening on port "+port))
