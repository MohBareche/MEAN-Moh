const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise
mongoose.connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(`Connexion impossible à la base de données: `, err);
    console.log(`Connecté avec succès à la base de données: ${config.db}`);
})

app.use(express.static(__dirname + '/client/dist/client/'));
app.get('*', (req, res) => {
    res.sendFile(path.joint(__dirname + '/client/dist/client/index.html'));
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});