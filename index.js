const mongoose = require("mongoose")
const app = require("./app")

// Usa la variable de entorno de Vercel    
const MONGO_URI = process.env.MONGO_URI 

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Base de datos conectada")

    app.listen(4000, () => {
        console.log("Servidor corriendo en puerto 4000")
    })
})
.catch((error) => {
    console.log(error)
})