const swaggerUi =  require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Comments Project',
        description: "All Apis details by swagger",
        contact:{
          email: 'rickygathwal@gmail.com',
          url: "https://github.com/deepakgathwal"
        },
        license:{
        name: "Project :- Comment",
        url: 'https://github.com/deepakgathwal/comments'
      },
      version: '1.0.0',
    },
    externalDocs:{
      description: "Meet Developer",
    
      url: "https://www.linkedin.com/in/deepak-gathwal-82aa9a220/"
    },
      components : {
        securitySchemas:{
          bearerAuth : {
            type : 'http',
            schema : 'bearer',
            bearerFormat : 'JWT'
          }
        }
      } ,
      security : [
        {
          bearerAuth : []
        }
      ],
    },
    apis: ["./routes/*.js","./Model/*.js"], // files containing annotations as above
  };

  const openapiSpecification = swaggerJsdoc(options);

  exports.createDocs = async(app) =>{
    app.use('/comment', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
    app.get('comment.json', (req,res) =>{
    return  res.setHeader("Content-Type", "application/json").send(openapiSpecification)
    })
    // console.log(`Comments Project Api's available at http://localhost/${process.env.PORT}/comment`)
  }

  