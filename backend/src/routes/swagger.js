const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui") 


//Metadata info de la API 
const options = {
    definition: {
        openapi: "3.0.0",
        info: {title: "Lexart Test API", version: "1.0.0"}
    },
    apis:["/routes/users.router.js", "/routes/products/products.router"]
}

//Docs en JSON 

const swaggerSpec = swaggerJSDoc(options)

//Setup Docs 

const swaggerDocs = ( app, port) => {
    
}