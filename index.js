const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');



//motor de plantilla EJS
//donde se crea una carpeta views y un index.js
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: false}))


//renderizar
//req (solicitud) y res (respuesta) son exactamente los mismos objetos que proporciona Node, por lo que puede invocar req.pipe(), req.on('data', callback) y cualquier otro objeto que invocaría sin estar Express implicado.
app.get('/', (req, res) => {
    res.render('index.ejs')
})


//webhook URL
app.post('/form-submit', (req, res) => {
    axios.post('https://hooks.slack.com/services/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', 
    {text: `Nombre: ${req.body.name}, Email: ${req.body.email}`,


}).then(() =>{
    res.send('Formulario completado con exito')

}).catch(() => {
    res.send('Faltan datos en el formulario')
})
})

//localhost
app.listen(port, () => {
    console.log(`Escuchando app en el port ${port}`);
})




//La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.
//Cargue http://localhost:3000/ en un navegador para ver la salida.