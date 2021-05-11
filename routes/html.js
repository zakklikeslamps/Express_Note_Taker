//Dependencies
const path = require('path');

//Routing
module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/index', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //If there is no matching route default to home
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};