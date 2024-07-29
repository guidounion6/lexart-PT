const swaggerJSDoc = require("swagger-jsdoc")

//Metadata info de la API 
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Lexart Test API", 
            version: "1.0.0",
            description: "API Documentation for your application"
        }
    },
    apis:["./routes/*.js"]
}


const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec