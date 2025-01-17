const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/servicios', (req, res) => {
    res.render("servicios", { titulo : "mi titulo"} )
})

app.use((req, res, next) => {
    res.render('404', { mensage404 : "La pagina no fue encontrada 404" })
})

app.listen(port, () => {
    console.log('escuchando')
})