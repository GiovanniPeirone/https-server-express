const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const app = express();


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORLD}@cluster0.kbnrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port = process.env.PORT || 3000

async function main(uri) {
    try {

        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Conexión exitosa a la base de datos');

    } catch (err) {

        console.error('Error al conectar con la base de datos:', err.message);

    }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main(uri);

// Configuración de vistas y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//Rutas Web
app.use('/', require('./router/rutasWeb'))
app.use('/MemoriasRam', require('./router/MemoriasRam'))


// Middleware para manejar 404
app.use((req, res) => {
    res.status(404).render('404', { mensage404: "La página no fue encontrada 404" });
});

// Middleware para manejar errores 500
app.use((err, req, res, next) => {
    console.error(err.stack); // Muestra el error en los registros
    res.status(500).send('Algo salió mal!');
});

// Verificar si el entorno es local
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });
}


// Exportar la función handler para Vercel
module.exports = (req, res) => {
    app(req, res); // Pasar las solicitudes HTTP a Express
};
