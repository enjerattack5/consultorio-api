const mongoose = require("mongoose")
const app = require("./app")

// Toma la variable global del entorno de Vercel
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(() => console.log("Base de datos conectada exitosamente"))
.catch((error) => console.error("Error al conectar la base de datos:", error))

// El puerto solo se levanta si estás corriendo el proyecto localmente
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`)
    })
}

// Esto es lo que Vercel necesita en la raíz para mapear tus rutas
module.exports = app