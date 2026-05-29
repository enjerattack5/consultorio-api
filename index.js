const mongoose = require("mongoose")
const app = require("./app")

// Toma la variable global del entorno (en Vercel usará la de Atlas)
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Base de datos conectada exitosamente")

    // Vercel maneja los puertos automáticamente en producción,
    // pero Express necesita saber en qué puerto escuchar si corre de forma externa
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`)
    })
})
.catch((error) => {
    console.error("Error al conectar la base de datos:", error)
})

// Exportamos la app para el entorno serverless de Vercel
module.exports = app