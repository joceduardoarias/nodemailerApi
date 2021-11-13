const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const app = express();
let port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

app.post('/email', (req, res) => {
	configMensaje(req.body).then(msg => {
		res.send(msg);
	});
});

app.get('/', (req, res) => {
	res.send('Hola mundo');
});

app.listen(port, () => {
	console.log('Servidor corriendo');
});